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
                    <div className="d-flex align-items-center justify-content-between">
                        <img src="/img/update.png" alt="update" className='mx-2'/>
                        <img src="/img/delete.png" alt="delete" className='mx-2'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card0