import React from 'react'


function Tile(props){
    return(
        <section>
            <img src={props.tileImage} alt={props.tileImageDescription} />
            <h2>{props.tileTitel}</h2>
            <p>{props.children}</p>
        </section>

    )
}



export default Tile;