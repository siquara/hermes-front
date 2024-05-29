
import { MagnifyingGlass } from "@phosphor-icons/react";
import HeroWoman from "/HeroWoman.png";

// xs400:pt-[8rem] md:pt-[15rem] lg:pt-0
export function Hero({ searchTerm, setSearchTerm }) {
  return (
    <div className="hero h-[calc(100vh-50px)] bg-[url('/HeroImage.png')] bg-no-repeat bg-cover flex items-center">
      <div className="h-full grid mx-auto max-w-7xl px-6 gap-2 lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center justify-center ">
        <div className="lg:col-span-7">
          <h2 className="text-white text-xl font-[300] mt-[120px] lg:mt-[0px]">
            Bem-vindo(a) a <strong className="font-[600]">Hermes</strong>
          </h2>
          <h1 className="text-white text-4xl lg:text-5xl font-[700]">
            Encontre as Ferramentas ideais para você
          </h1>
          <div className="relative mt-8 w-full xs400:w-80">
            <input
              type="text"
              id="searchComponent"
              className="pr-10 p-2 pl-4 text-start text-secondary w-full rounded-full border-none focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Pesquisar Ferramenta"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <MagnifyingGlass className="text-secondary" size={30} />
            </span>
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <img
            src={HeroWoman}
            alt="Woman"
            className="md:max-w-[85%] lg:max-w-[100%]"
          />
        </div>
      </div>
    </div>
  );
}
