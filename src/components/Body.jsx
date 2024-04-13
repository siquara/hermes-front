import * as React from "react";
import Card from "./Card";
import { Button } from "./Button";
import { filterData } from "../utils/data/filter";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function Body() {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 12,
    },
  });

  const [activeFilter, setActiveFilter] = React.useState(filterData[0]);

  return (
    <div className="bg-white min-h-screen relative">
      <div className="absolute top-0 left-0 right-0 z-10 top-[-110px]">
        <div className="transform -translate-y-[40px]">
          <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
            {filterData.map((filter, index) => (
              <div key={index} className="keen-slider__slide min-w-fit max-w-fit">
                <Button
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-8 relative z-0 mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10"> 
          {Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
