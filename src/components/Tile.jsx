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
                    {props.children}
                </section>
            </>

        )
    }
}

export default Tile;