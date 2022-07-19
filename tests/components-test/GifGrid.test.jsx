import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs'); //haga un mock completo de ese path

describe('Pruebas en GifGrid.jsx', () => { 

    const category = 'One punch';

    test('debe de mostrar loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category} /> );
        
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));


     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost.com'
        },
        {
            id: 'Goku',
            title: 'Dragon ball',
            url: 'https://localhost/goku.com'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category} /> );

        expect( screen.getAllByRole('img').length ).toBe(2);



      });
 });