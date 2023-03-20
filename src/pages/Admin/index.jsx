import React from 'react'
import Card from '../../components/Card'

function index() {
  return (
    <>
        <div className="container my-2">
            <h2>We have the community of the farmers, merchants and landlords which are communicate with each others</h2>

            {/* Card to show the farmwers ,merchants and landlords  */}
            <div className="container my-2">
                <div className="row">
                    <Card img={'/img/farmers_logo.png'} title={'Farmers'} count={23} />
                    <Card img={'/img/farmers_logo.png'} title={'Farmers'} count={23} />
                    <Card img={'/img/farmers_logo.png'} title={'Farmers'} count={23} />
                </div>
            </div>
            

        </div>

        {/* Give the more info  */}
        <div className="container-fluid my-2">
            <h3>We have the big family to interact, and we are all feel happy to work and help of them 😎</h3>
        </div>
    </>
  )
}

export default index