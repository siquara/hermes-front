import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import PropTypes from 'prop-types';
export function Card({ title, description, image, link, category }) {
    return (
        <div data-testid="card" className="flex flex-col bg-[#ededed] md:bg-[#f5f5f5] shadow-md rounded-3xl py-12 px-9 xs400:px-12 transition duration-300 ease-in-out transform hover:bg-white mb-10 max-w-lg h-86 hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.3)]">
            <div data-testid="card_conteudo" className='mb-4'>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                    <img data-testid="card_conteudo_imagem" src={image} className='min-h-5' />
                </div>
                <div className="flex flex-col items-center md:items-start text-center gap-2 mt-5">
                    <h1 data-testid="card_conteudo_titulo" className="text-3xl font-bold text-secondary ">{title}</h1>
                    <p className='text-center text-secondary hover:cursor-pointer hover:underline'>{category}</p>
                </div>
                <p data-testid="card_conteudo_descricao" className="text-secondary text-base mt-5 hyphens-auto text-justify " >
                    {description}
                </p>
            </div>
            <div data-testid="card_botao" className="flex justify-center items-center mt-auto">
                <a data-testid="card_botao_link" href={link} target="_blank" className="flex gap-4 bg-secondary hover:bg-white hover:cursor-pointer hover:text-secondary hover:border hover:border-secondary text-white font-bold py-2 px-5 xs400:px-10 rounded-tr-3xl rounded-bl-2xl transition-all duration-300 ease-in-out">
                    Acesse aqui
                    <ArrowRight size={24} />
                </a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};