import React from "react";
import LogoUnifacs from "/LogoUnifacs.png";
import LogoAnima from "../../public/LogoAnima.png";
import HermesLogoWhite from "/assets/HermesLogoWhite.svg";
import { GithubLogo } from "@phosphor-icons/react";
import { Member } from "./Member";
import { members1, members2 } from "../utils/data/members";
import ButtonFooter from "./ButtonFooter"; 

export function Footer() {
  return (
    <div className="bg-secondary text-white flex flex-col justify-between ">
      <div className="mt-[60px] mx-auto max-w-7xl px-6 gap-6 w-full grid grid-cols-12 lg:items-start">
        <div className="col-span-12 sm:col-span-12 lg:col-span-4 flex items-center justify-center flex-col lg:mb-6">
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
          <div className="flex flex-col gap-5 mt-5  w-full items-center">
            <h2 className="font-[600] text-lg text-center">Desenvolvedores:</h2>
              {members2.map((filter, index) => {
              return (
                <Member
                key={index}                 
                name={filter.name}
                githubLink={filter.githubLink}
                linkedinLink={filter.linkedinLink}
                />
              ); })}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-5 lg:mb-5 w-full items-center sm:mb-5 ">
              <h2 className="font-[600] text-lg text-center">Documentação:</h2>
              {members1.map((filter, index) => {
              return (
                <Member
                key={index}                 
                name={filter.name}
                githubLink={filter.githubLink}
                linkedinLink={filter.linkedinLink}
                />
              ); })}
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-5 mb-5 w-full items-center">
                <h2 className="font-[600] text-lg text-center">Professores:</h2>
                <a href="#">Felipe Oliveira dos Santos</a>
                <a href="#">Leia Fernandes de Assis Garcia</a>
                <a href="#">Stella Marys Dornelas Lamounier</a>
                <a href="#">Edquel Bueno Prado Farias</a>
            </div>
      </div>
      <footer className="border-t flex justify-between items-center py-[24px] ">
        <div className="flex w-full gap-10 justify-center">
          <a
            href="https://www.instagram.com/anima.educacao/?hl=pt"
            target="_black"
          >
            <img
              src={LogoAnima}
              alt="LogoAnima"
              className="w-[109px]"
            />
          </a>
          <a href="https://www.unifacs.br" target="_blank">
            <img
              src={LogoUnifacs}
              alt="LogoUnifacs"
              className="w-[160px]"
            />
          </a>
        </div>
        <ButtonFooter /> 
      </footer>
    </div>
  );
} 

export default Footer;
