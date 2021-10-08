import { useState, useEffect } from 'react';

import { getGifs } from "../helpers/getGifs";

export const useGetGifs = ( categoria ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGifs(categoria)
        .then((imagenes) => { 
            setState({ 
                data: imagenes,
                loading: false
            });
        })

    }, [categoria]);
    
    return state;
}
