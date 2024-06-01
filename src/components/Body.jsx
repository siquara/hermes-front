import * as React from "react";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { filterData } from "../utils/data/filter";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { cards } from "../utils/data/cards";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { FaTrash } from "react-icons/fa";

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
  const [activeCards, setActiveCards] = useState(allCards);
  const [visibleCards, setVisibleCards] = useState(4);

  function handleChangeActiveCard(filter) {
    if (filter.id === "todasAsFerramentas") {
      setActiveFilter(filter.title);
      setActiveCards(allCards);
      setVisibleCards(4); // Reset visible cards count
    } else if (filter.id === "favoritos") {
      setActiveFilter(filter.title);
      const favoriteTitles = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')).map(card => card.title) : [];
      const favoriteCards = allCards.filter(card => favoriteTitles.includes(card.title));
      setActiveCards(favoriteCards);
      setVisibleCards(4); // Reset visible cards count
    } else {
      setActiveFilter(filter.title);
      setActiveCards(cards[filter.id]);
      setVisibleCards(4); // Reset visible cards count
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
      setVisibleCards(4); // Reset visible cards count
    } else {
      setActiveCards(allCards);
      setVisibleCards(4); // Reset visible cards count
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
        <button
          onClick={clearFavorites}
          className="bg-red-600 hover:bg-red-500 text-white flex gap-2 items-center align-middle font-bold py-2 px-4 rounded mt-6 ml-[45%]"
        >
          <FaTrash size={'1.1rem'} className="text-white"/>Limpar Favoritos
        </button>
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
            className="bg-primary cursor-pointer w-full mx-[20%] mb-4 text-white font-bold py-2 px-4 rounded"
          >
            Ver Mais
          </button>
        </div>
      )}
    </div>
  );
}