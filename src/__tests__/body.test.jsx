import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Body } from '../components/Body';
import { cards } from "../utils/data/cards";
import { filterData } from "../utils/data/filter";
import { Button } from '../components/Button';

describe('Body Component', () => {

    it('Renderiza os botoes do filtro e os cards', async () => {

        render(<Body />);

        //Verifica se os Filtros e botões estão sendo renderizado

        for (const filtro of filterData) {
            //Ignora o Todas as Ferramentas pois ela não é um Array que precise ser testado
            if (filtro.id === 'todasAsFerramentas') {
                continue;
            }

            fireEvent.click(screen.getByRole('button', { name: filtro.title }));
            // console.log(filtro.title)

            await waitFor(() => {
                //Teste dos Filtros
                expect(screen.getByText(filtro.title)).toBeInTheDocument()
                // console.log("Renderizado Filtro:", filtro.title)

                //Teste dos Cards

                const filtroCards = cards[filtro.id] || [];
                for (const card of filtroCards) {
                    expect(screen.getByText(card.title)).toBeInTheDocument();
                    // console.log("Renderizado Card:", card.title);
                };

            });
        }
    });

    it('Verifica a estilização do botão dos filtros', () => {

        render(<Button />);

        const botao = screen.getByTestId('botao');
        expect(botao).toHaveClass(" font-[500] flex items-center justify-center break-words min-w-[290px] max-w-[290px] h-[80px] px-[45px] mx-[7px] border-solid border border-[#1E3954] rounded-full hover:text-white hover:bg-primary hover:border-secondary transition-all duration-500 ease-in-out");

    });
});