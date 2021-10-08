import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategorias} ) => {
    const [inputValue, setInputValue] = useState('')
    
    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategorias((categorias) => [ inputValue, ...categorias, ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit= {handleOnSubmit}>
            <input
                type="text"
                placeholder="Ingrese un criterio de búsqueda..."
                value = { inputValue }
                onChange = { handleOnChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
};
