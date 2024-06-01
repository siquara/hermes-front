import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Body } from '../components/Body';
import { Hero } from '../components/Hero'

describe('Search Term', () => {

    it('Renderiza o componente', () => {

        render(<Hero searchTerm="" setSearchTerm={() => {}} />);
        const inputElement = screen.getByTestId('searchComponent');
        expect(inputElement).toBeInTheDocument();
    });

    test('chama a função setSearchTerm quando o valor do input muda', () => {
        const setSearchTerm = jest.fn();
        render(<Hero searchTerm="" setSearchTerm={setSearchTerm} />);
        const inputElement = screen.getByTestId('searchComponent');
        fireEvent.change(inputElement, { target: { value: 'teste' } });
        expect(setSearchTerm).toHaveBeenCalledTimes(1);
        expect(setSearchTerm).toHaveBeenCalledWith('teste');
      });
    
})