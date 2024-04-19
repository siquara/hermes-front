import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa as funções de matcher estendidas
import { Footer } from '../components/Footer';

describe('Footer Component', ()=>{
    it('Renderiza Corretamente', () => {

        render(<Footer />);

        const imagemElement = screen.getByRole('img', { name: /Hermes Logo/i });
        expect(imagemElement).toBeInTheDocument();
    });
});