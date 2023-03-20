import React from 'react'
import Card0 from '../../components/Card0'


function SearchLists() {
  return (
    <>
        <div className="container mx-2 my-3">
            <h3>Your search <span className="text-danger">results</span></h3>

            <div className="container my-3">
                <div className="row">
                    {/* lists all the cards are in form of searching  */}
                    <Card0 img={img} title={title} description={description}  />
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchLists