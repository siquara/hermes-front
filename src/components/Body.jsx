import * as React from "react";
import { useState, useEffect } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { filterData } from "../utils/data/filter";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { cards } from "../utils/data/cards";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: "auto",
      spacing: 12,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

  const [activeFilter, setActiveFilter] = React.useState(filterData[0].title);
  const [activeCards, setActiveCards] = React.useState(allCards);

  function handleChangeActiveCard(filter) {
    if (filter.id === "todasAsFerramentas") {
      setActiveFilter(filter.title)
      setActiveCards(allCards)
    } else {
      setActiveFilter(filter.title)
      setActiveCards(cards[filter.id]);
    }
  }

  
  useEffect(() => {
    if (typeof searchTerm !== "undefined" && searchTerm !== "") {
      const filteredCards = allCards.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setActiveCards(filteredCards);
      setActiveFilter("Todas as Ferramentas");
    } else {
      setActiveCards(allCards);
    }
  }, [searchTerm]);

  return (
    <div className="bg-white relative">
      <div className="navigation-wrapper z-10 transform -translate-y-[40px]">
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
        <div className="flex gap-10 items-center justify-center">
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
      </div>
      <div className="flex flex-wrap gap-10 justify-center mx-auto max-w-7xl px-6">
        {activeCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            link={card.link}
            category={card.category}
          />
        ))}
      </div>
    </div>
  );
}
