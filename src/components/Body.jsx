import * as React from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { filterData } from "../utils/data/filter";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { cards } from "../utils/data/cards";

export function Body() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 12,
    },
  });

  const [activeFilter, setActiveFilter] = React.useState(filterData[0].title);

  const [activeCards, setActiveCards] = React.useState(cards[filterData[0].id]);

  function handleChangeActiveCard(filter) {
    setActiveFilter(filter.title)
    setActiveCards(cards[filter.id]);
  }

  return (
    <div className="bg-white relative">
      <div className=" z-10 transform -translate-y-[40px]">
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
      </div>
      <div className=" flex flex-wrap gap-10 justify-center mx-auto max-w-7xl px-6">

        {
          activeCards.map((filter, index) => {
            return (
              <Card
                key={index}
                title={filter.title}
                description={filter.description}
                image={filter.image}
                link={filter.link}
              />
            );
          })
        }
      </div>
    </div>
  );
}
