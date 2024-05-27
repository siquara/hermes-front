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
          <div className="mt-[2rem]">
            <input
              type="text"
              id="searchComponent"
              className="p-[0.5rem] text-start pl-4 w-[25rem] rounded-[4rem] border-none focus:outline-none focus:ring-[1px] focus:ring-[black]"
              placeholder="Pesquisar Ferramentas"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="lg:col-span-5 place-self-center">
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
