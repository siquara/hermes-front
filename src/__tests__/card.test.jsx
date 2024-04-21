import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from '../components/Card';

describe('Card Component', () => {
    const props = {
        title: 'Titulo Teste',
        description: 'Descrição Teste',
        image: 'teste.png',
        link: 'http://localhost/'
    };

    it('Renderizar com os props definidos', () => {
        render(<Card {...props} />);

        expect(screen.getByText(props.title)).toBeInTheDocument();
        expect(screen.getByText(props.description)).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute('href', props.link);

        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', props.image);
    });

    it('Renderizar com os props obrigatorios', () => {
        const { title, description, image, link } = props;

        const { container } = render(<Card title={title} description={description} image={image} link={link} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('Verificar se a classe CSS está definida', () => {
        render(<Card {...props} />);

        const cardElement = screen.getByTestId('card');
        expect(cardElement).toHaveClass('flex flex-col bg-[#ededed] md:bg-[#f5f5f5] shadow-md rounded-3xl py-12 px-9 xs400:px-12 transition duration-300 ease-in-out transform hover:bg-white mb-10 max-w-lg h-86 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]');

        const cardElementConteudo = screen.getByTestId('card_conteudo');
        expect(cardElementConteudo).toHaveClass('mb-4');

        const cardElementConteudoImagem = screen.getByTestId('card_conteudo_imagem');
        expect(cardElementConteudoImagem).toHaveClass('min-h-5 max-w-[300px]');

        const cardElementConteudoTitulo = screen.getByTestId('card_conteudo_titulo');
        expect(cardElementConteudoTitulo).toHaveClass('text-3xl font-bold mt-5 text-secondary');

        const cardElementConteudoDescricao = screen.getByTestId('card_conteudo_descricao');
        expect(cardElementConteudoDescricao).toHaveClass('text-secondary text-base mt-5 hyphens-auto text-justify');

        const cardBotao = screen.getByTestId('card_botao');
        expect(cardBotao).toHaveClass('flex justify-center items-center mt-auto');

        const cardBotaoLink = screen.getByTestId('card_botao_link');
        expect(cardBotaoLink).toHaveClass('flex gap-4 bg-secondary hover:bg-white hover:cursor-pointer hover:text-secondary hover:border hover:border-secondary text-white font-bold py-2 px-5 xs400:px-10 rounded-tr-3xl rounded-bl-2xl transition-all duration-300 ease-in-out');

    });

    it('Verifica se as funcionlidades funcionam', () => {
        render(<Card {...props} />);

        const cardBotaoLink = screen.getByTestId('card_botao_link');
        expect(cardBotaoLink).toHaveAttribute('href', props.link);

        //Testa se o botão está clicável e redirecionando para as paginas
        fireEvent.click(cardBotaoLink);
        expect(window.location.href).toBe(props.link);
    });
});
