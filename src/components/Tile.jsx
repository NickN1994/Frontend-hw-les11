import React from "react";

function Tile (props) {

    if (props.image) {
    return (
        <>
            <section>
                <img src={props.image} alt={props.alt}/>
            </section>
        </>

    )} else {
        return (

            <>
                <section>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </section>
            </>

        )
    }
}

export default Tile;