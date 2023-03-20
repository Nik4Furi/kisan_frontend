import React from 'react'
import MarchantsContext from './MarchantsContext'

function MarchantsState() {
    //-----Add a new  machinary info-----X
    const addMachinary = async(content)=>{
        try {            
       
        let data = await fetch('http://localhost:8000/api/files/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      });
      let response = await data.json();
      console.log('response of the marchants')
    } catch (error) {
            
    }
      
    }
  return (
    <>
        <MarchantsContext.Provider>
            {props.Children}
        </MarchantsContext.Provider>
    </>
  )
}

export default MarchantsState