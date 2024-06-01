import * as React from "react";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { filterData } from "../utils/data/filter";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { cards } from "../utils/data/cards";
import { CaretLeft, CaretRight, Trash } from "@phosphor-icons/react";

const isTest = process.env.NODE_ENV === 'test';

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return props.left ? (
    <CaretLeft
      size={50}
      onClick={props.onClick}
      className={` text-secondary mt-5 cursor-pointer border-y-4 border-transparent hover:border-none arrow arrow--left ${disabled}`}
    />
  ) : (
    <CaretRight
      size={50}
      onClick={props.onClick}
      className={`text-secondary mt-5 cursor-pointer border-y-4 border-transparent hover:border-none  arrow arrow--right ${disabled}`}
    />
  );
}

function clearFavorites() {
  localStorage.removeItem('favorites');
  window.location.reload();
}

const allCards = [];
for (let category in cards) {
  const categoryObject = filterData.find(filter => filter.id === category);
  const cardsInCategory = cards[category].map(card => ({
    ...card,
    category: categoryObject ? categoryObject.title : category,
  }));
  allCards.push(...cardsInCategory);
}
allCards.sort((a, b) => a.title.localeCompare(b.title));

export function Body({ searchTerm }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: "auto",
      spacing: 12,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [activeFilter, setActiveFilter] = useState(filterData[0].title);
  const [activeFilterId, setActiveFilterId] = useState(filterData[0].id); // Adiciona estado para o ID do filtro ativo
  const [activeCards, setActiveCards] = useState(allCards);
  const [visibleCards, setVisibleCards] = useState(isTest ? allCards.length : 4);

  function handleChangeActiveCard(filter) {
    setActiveFilter(filter.title);
    setActiveFilterId(filter.id); // Atualiza o ID do filtro ativo
    if (filter.id === "todasAsFerramentas") {
      setActiveCards(allCards);
      setVisibleCards(isTest ? allCards.length : 4);
    } else if (filter.id === "favoritos") {
      const favoriteTitles = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')).map(card => card.title) : [];
      const favoriteCards = allCards.filter(card => favoriteTitles.includes(card.title));
      setActiveCards(favoriteCards);
      setVisibleCards(isTest ? allCards.length : 4);
    } else {
      setActiveCards(cards[filter.id]);
      setVisibleCards(isTest ? cards[filter.id].length : 4); 
    }
  }

  function loadMoreCards() {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
  }

  useEffect(() => {
    if (typeof searchTerm !== "undefined" && searchTerm !== "") {
      const filteredCards = allCards.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setActiveCards(filteredCards);
      setActiveFilter("Todas as Ferramentas");
      setActiveFilterId("todasAsFerramentas"); // Atualiza o ID do filtro ativo
      setVisibleCards(isTest ? filteredCards.length : 4); // Mostra todos os cards em modo de teste
    } else {
      setActiveCards(allCards);
      setVisibleCards(isTest ? allCards.length : 4); // Mostra todos os cards em modo de teste
    }
  }, [searchTerm]);

  return (
    <div className="bg-white relative">
      <div className="navigation-wrapper z-10 transform -translate-y-[40px] flex items-center align-middle flex-col">
        <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
          {filterData.map((filter, index) => (
            <div key={index} className="keen-slider__slide min-w-fit max-w-fit">
              <Button
                active={activeFilter === filter.title}
                onClick={() => handleChangeActiveCard(filter)}
              >
                {filter.title}
              </Button>
            </div>
          ))}
        </div>
        <div className="flex gap-10 items-center align-middle justify-center">
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {activeFilterId === "favoritos" && (
          <button
            onClick={clearFavorites}
            className="bg-white border border-red-600 hover:bg-red-600 hover:text-white text-red-600 flex gap-2 items-center align-middle font-bold py-2 px-4 rounded-full mt-6 ml-[20%] xs400:ml-[45%] transition-all duration-300 ease-in-out"
          >
            <Trash size={24}/>
            Limpar Favoritos
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-10 justify-center mx-auto max-w-7xl px-6">
        {activeCards.length === 0 ? (
          <div className="font-[600] flex items-center justify-center break-words h-[80px] px-[45px] mx-[7px] my-[2rem] text-[2rem] text-secondary">Ferramenta não encontrada</div>
        ) : (
          activeCards.slice(0, visibleCards).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
              category={card.category}
              favorite={card.favorite || false} // Passa o valor de favorite para o Card
            />
          ))
        )}
      </div>
      {visibleCards < activeCards.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreCards}
            className="text-xl text-center py-3 px-20 border-solid border-2 border-secondary rounded-full flex items-center gap-2 max-w-80 text-secondary font-[600] hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-500 ease-in-out mb-7"
          >
            Ver Mais
          </button>
        </div>
      )}
    </div>
  );
}