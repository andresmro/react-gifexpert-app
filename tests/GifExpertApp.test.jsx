
import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en GifExpertApp.jsx', () => { 

    test('debe de hacer match con el snapshot ', () => { 
        const { container } = render(<GifExpertApp/>);
        expect( container ).toMatchSnapshot();
        screen.debug()
        
     });



 });