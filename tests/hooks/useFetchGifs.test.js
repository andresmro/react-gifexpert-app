
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en el hook useFetchGifs', () => { 

    test('debe de regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     });

     test('debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 

        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );

        await waitFor(//le estoy diciendo que espere a que esta condicion dentro se cumpla
            () => expect( result.current.images.length ).toBeGreaterThan(0), //que sea mas grande que 0
        );


        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

     });



 });