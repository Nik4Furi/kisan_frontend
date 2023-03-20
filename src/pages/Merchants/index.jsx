import React from 'react'
import Card2 from '../../components/Card2';
import {Link} from 'react-router-dom';


function index() {
  return (
    
    <>
        <div className="container-fluid m-0 p-0 text-bg-secondary d-flex align-items-center justify-content-center">
        <Link to="/admin/" className="mx-2">Home</Link>        
        <Link to="/merchants/add" className="mx-2">Add Machinaries</Link>        

    </div>

    {/* See all the lists of the machinaries we have  */}
    <div className="container my-2">
        <div className="row">
            <Card2 title={title} description={description} img={img} />
        </div>
    </div>
    </>
  )
}

export default index;