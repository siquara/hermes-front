import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/Button';

describe('Button Component', () => {
    render(<Button />);

    it('Verifica a Estilizacao', () => {

        const botao = screen.getByTestId('botao');
        expect(botao).toHaveClass(" font-[500] flex items-center justify-center break-words min-w-[290px] max-w-[290px] h-[80px] px-[45px] mx-[7px] border-solid border border-[#1E3954] rounded-full hover:text-white hover:bg-primary hover:border-secondary transition-all duration-500 ease-in-out");

    })
});