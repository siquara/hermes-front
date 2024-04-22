import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../components/Header';

describe('Header Component', () => {
  it('Renderiza o Header', () => {
    
    render(<Header />);

    const headerElement = screen.getByTestId("header");

    // Verifica se a classe CSS está correta
    expect(headerElement).toHaveClass("bg-white rounded-e-full w-fit py-[12px] pe-[5px] ps-[20px] z-10 absolute top-[20px]");
    
    const imagemElement = screen.getByRole('img', { name: /Logotipo do Hermes/i });
    expect(imagemElement).toBeInTheDocument();

    // Verifica se a classe CSS está correta
    expect(imagemElement).toHaveClass('max-w-[80%]');
    
  });

  it('Redimensiona a imagem corretamente em telas de médio porte', () => {
    // Ajusta a largura da janela para simular uma tela de médio porte
    global.innerWidth = 768;

    render(<Header />);

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toHaveClass("lg:pe-[45px] lg:ps-[120px] lg:top-[50px]")
    const imagemElement = screen.getByRole('img', { name: /Logotipo do Hermes/i });

    expect(imagemElement).toHaveClass('lg:max-w-[100%]');

  });
});
