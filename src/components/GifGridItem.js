import React from 'react'

export const GifGridItem = (props) => {
    
    const {title,url} = props;
    
    return (
        <div className="card animate__animated animate__bounce">
            <img src={url} alt={title}/>
            <p> {title} </p>
        </div>
    )
}
