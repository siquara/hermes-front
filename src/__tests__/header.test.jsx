import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa as funções de matcher estendidas
import { Header } from '../components/Header';

describe('Header Component', () => {
  test('renderiza corretamente', () => {
    // Renderiza o componente Header
    render(<Header />);

    // Verifica se a imagem do logotipo Hermes está presente no componente renderizado
    const imagemElement = screen.getByRole('img', { name: /Logotipo do Hermes/i });
    expect(imagemElement).toBeInTheDocument();

    // Verifica se a classe CSS está correta
    expect(imagemElement).toHaveClass('max-w-[80%]');
  });

  test('redimensiona a imagem corretamente em telas de médio porte', () => {
    // Ajusta a largura da janela para simular uma tela de médio porte
    global.innerWidth = 768;

    // Renderiza o componente Header
    render(<Header />);

    // Verifica se a imagem do logotipo Hermes está presente no componente renderizado
    const imagemElement = screen.getByRole('img', { name: /Logotipo do Hermes/i });

    // Verifica se a classe CSS está correta para telas de médio porte
    expect(imagemElement).toHaveClass('lg:max-w-[100%]');
  });
});
