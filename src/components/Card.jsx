import React from 'react'

function Card({ img, title, counts }) {
    return (
        <>
            <div class="card mb-3 mx-2" style={{ maxWidth: "540px;" }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt={title} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{counts}</h5>
                            <p class="card-text">We have the {counts} {title} family</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card