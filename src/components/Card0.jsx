import React from 'react'
import { Link } from "react-router-dom";

function Card0() {
    return (

        <>
            <div class="card mx-2 my-2" style={{ width: "18rem;" }}>
                <img src={img} class="card-img-top" alt={title} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}.</p>
                    <Link href="#"  class="btn btn-danger">Book</Link>
                </div>
            </div>
        </>
    )
}

export default Card0