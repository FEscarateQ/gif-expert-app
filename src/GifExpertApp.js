import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['Final Fantasy']);



    return (
        <>
            <AddCategory
                setCategorias = {setCategorias}
            />
            <button
                onClick={() => setCategorias([])}
            >
                Limpiar
            </button>
            <hr/>
                { 
                    categorias.map((categoria) => {
                        return (
                                    <GifGrid
                                        key={categoria}
                                        categoria = {categoria}
                                    />
                                )
                    })
                }
        </>
    )
}

export default GifExpertApp;