import React from 'react'
import { useGetGifs } from '../hooks/useGetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
    
    const { data: imagenes, loading } = useGetGifs(categoria);    
    
    return (
        <> 
        
            <h3>{categoria}</h3>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}
            
            
            <div className="card-grid">
                { 
                    imagenes.length > 0 ?
                    imagenes.map( (imagen) => (
                        <GifGridItem
                            key={imagen.id}
                            {...imagen}
                        />
                    ))
                    :
                    <p>Sin Resultados</p>
                }
            </div>
        </>
       
    )
}
