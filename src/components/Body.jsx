import * as React from "react";
import { Card } from "./Card";
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
    <div className="bg-white relative">
        <div className=" z-10 transform -translate-y-[40px]">
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
      <div className=" flex flex-wrap gap-10 justify-center mx-auto max-w-7xl px-6">
        <Card 
        title="Trello" 
        description="Ferramenta visual que possibilita ao time o gerenciamento de qualquer tipo de projeto, fluxo de trabalho ou monitoramento de tarefas" 
        image="../public/assets/Cards/trello.png" 
        link="https://trello.com/pt-BR" 
        />
        <Card 
        title="Asana" 
        description="Asana é uma ferramenta para gerenciamento de projetos, tarefas e equipes. Sua função é tornar o cotidiano dos usuários mais produtivo ao centralizar tudo em um único app." 
        image="../public/assets/Cards/asana.png" 
        link="https://asana.com/pt?noredirect=" 
        />
        <Card 
        title="Jira" 
        description="O Jira é um software de gerenciamento de projetos desenvolvido pela Atlassian. Esse software reúne todas as funcionalidades necessárias para o controle e organização de diferentes tipos de projetos, equipes e ambientes de desenvolvimento." 
        image="../public/assets/Cards/jira.png" 
        link="https://www.atlassian.com/software/jira" 
        />
      </div>
    </div>
  );
}
