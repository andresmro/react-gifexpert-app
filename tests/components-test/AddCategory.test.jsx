import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('pruebas sobre AddCategory.jsx', () => { 

    test('debe de cambiar el valor de la caja de texto ', () => { 

        render( <AddCategory onNewCategory={() => {}} /> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } } );

        expect( input.value ).toBe('Saitama');

     });

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); //jest function, mockeo "simula" algo

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );
       // screen.debug();

       expect( input.value ).toBe('');//evaluo si la caja de texto esta vacia ya que al hacer submit se supone el state cambia y lo dejamos vacio
        
       expect( onNewCategory ).toHaveBeenCalled();
       expect( onNewCategory ).toHaveBeenCalledTimes(1);//se espera que fuera llamada 1 vez
       expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
       
      });

      test('No debe de llamar onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();

        

       });

 });

 