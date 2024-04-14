// eslint-disable-next-line no-unused-vars
import React from 'react';
import hermesLogo from "/assets/hermesLogo.svg";

export function Header() {
  return (
    <header className="bg-white rounded-e-full w-fit py-[12px] pe-[5px] lg:pe-[45px] ps-[20px] lg:ps-[120px] z-10 absolute top-[20px] lg:top-[50px]">
      <a href="./index.html"><img src={hermesLogo} alt="Logotipo do Hermes" className="max-w-[80%] lg:max-w-[100%]"/></a>
    </header>
  );
}
