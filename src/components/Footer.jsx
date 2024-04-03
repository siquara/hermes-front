import LogoAnima from "/LogoAnima.png";
import LogoUnifacs from "/LogoUnifacs.png";
import HermesLogoWhite from "../assets/HermesLogoWhite.svg";
import { Circle, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <div className="bg-secondary text-white flex flex-col justify-between ">
      <div className="mt-[60px] mx-auto max-w-7xl px-6 w-full lg:mx-auto grid grid-cols-12 lg:items-start">
        <div className=" col-span-12 sm:col-span-12 lg:col-span-5 flex items-center justify-center flex-col mb-6">
          <img
            src={HermesLogoWhite}
            alt="Hermes Logo"
            className="max-w-[300px]"
          />
          <a
            href="https://github.com/siquara/hermes-front"
            target="_blank"
            className="text-center py-2 px-5 border-solid border-2 border-white rounded-full flex items-center gap-2 w-[fit-content] text-white font-[600] hover:bg-white hover:text-secondary hover:border-secondary transition-all duration-500 ease-in-out mt-5"
          >
            <GithubLogo size={35} />
            Acesse Aqui o Repositório
          </a>
        </div>
        <div className=" flex flex-col items-center lg:items-baseline col-span-12 sm:col-span-6 lg:col-span-7 pb-5 sm:pb-0">
          <h2 className="font-[600] mb-3">Contate os Integrantes:</h2>
          <div className="lg:grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 flex flex-col gap-5 mb-5 items-center sm:items-baseline ">
              <p className="flex items-center gap-2 w-full justify-between">
                Beatriz Siquara
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/siquara"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/beatriz-siquara"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
              <p className="flex items-center gap-2 w-full justify-between">
                David Freitas
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/Dvz071"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/david-freitas0801/"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
              <p className="flex items-center gap-2 w-full justify-between">
                Gabriel Almeida
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/Gabriel-Gaps"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-souza-a12078302"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>

              <p className="flex items-center gap-2 w-full justify-between">
                Ian Freire Borges
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/ian-Freire-Borges"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://linkedin.com/in/ian-borges-796458294"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
              <p className="flex items-center gap-2 w-full justify-between">
                Irvin M. Moura
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/IrvinMoura"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/irvinmarques/"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
              <p className="flex items-center gap-2 w-full justify-between">
                Isabelle Maciel
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/isabelle1maciel"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/isabelle-maciel-a60563301"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-8  flex flex-col gap-5 mb-5 items-center sm:items-baseline">
              <p className="flex items-center gap-2 w-full justify-between">
                Jonathas Maciel
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/jonz1n"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jonathasmacielsantos"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
              <p className="flex items-center gap-2 w-full justify-between">
                Pedro Carneiro
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/Pkarneiro"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://linkedin.com/in/pedro-henrique-carneiro-787010257"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
              <p className="flex items-center gap-2 w-full justify-between">
                Rafael Teixeira
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/Rafaeltqc"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rafael-teixeira-queiroz-de-carvalho-02b805289/?original_referer="
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>

              <p className="flex items-center gap-2 w-full justify-between">
                Victor M. Alves
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/victormssa"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/victor-manoel-soares-silva-alves/"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
              <p className="flex items-center gap-2 w-full justify-between">
                Vitoria Cardoso
                <Circle size={5} className="bg-white rounded-full" />
                <a
                  href="https://github.com/vitoriacardoso05"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <GithubLogo size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vitoria-cardoso-595b23160/"
                  className="border-b-[2px] border-solid border-transparent hover:border-white"
                  target="_blank"
                >
                  <LinkedinLogo size={30} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center lg:items-baseline col-span-12 sm:col-span-6 lg:col-start-6 lg:mb-5 pb-5 sm:pb-0 ">
          <h2 className="font-[600] mb-3">Professores:</h2>
          <div className="flex flex-col gap-5">
            <a href="#">Felipe Oliveira dos Santos</a>
            <a href="#">Leia Fernandes de Assis Garcia</a>
            <a href="#">Stella Marys Dornelas Lamounier</a>
            <a href="#">Edquel Bueno Prado Farias</a>
          </div>
        </div>
      </div>
      <footer className="border-t flex flex-col md:flex-row justify-between items-center py-[24px] px-[120px]">
        <div className="font-[600]">UNIVERSIDADE:</div>
        <div className="flex gap-10 md:gap-20 pt-5 md:pt-0 ">
          <a
            href="https://www.instagram.com/anima.educacao/?hl=pt"
            target="_black"
          >
            <img
              src={LogoAnima}
              alt="LogoAnima"
              className=" min-w-[100px] max-w-[100%] w-[109px]"
            />
          </a>
          <a href="https://www.unifacs.br" target="_blank">
            <img
              src={LogoUnifacs}
              alt="LogoUnifacs"
              className="min-w-[150px] max-w-[80%] md:max-w-[100%] w-[160px]"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
