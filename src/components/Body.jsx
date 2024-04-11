import * as React from "react";
import { Button } from "./Button";
import { filterData } from "../utils/data/filter";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function Body() {   
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 12,
    },
  });

  // activeFilter = string
  const [activeFilter, setActiveFilter] = React.useState(filterData[0])

  return (
    <div className="bg-white h-screen">

      <div className="transform -translate-y-[40px]">
        <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
          {filterData.map((filter, index) => {
            return (
              <div
                key={index}
                className="keen-slider__slide min-w-fit max-w-fit"
              >
                <Button active={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                    {filter}
                </Button> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
