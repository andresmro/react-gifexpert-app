
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3 className="category-title">{ category }</h3>
       
        {
          isLoading && (<h2>Cargando...</h2>)
          
        }
        

        <div className="card-grid">
            { images.map( (image) => (
              <GifItem 
                key={image.id} 
                { ...image }//todas las propiedades que vengan en el img las voy a esparsir
              />
            ))}
        </div>
    </>
  )
}
