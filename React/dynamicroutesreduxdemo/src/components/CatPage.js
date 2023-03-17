import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CatPage({}) {
    let params = useParams();
    const[catCollectedObject, setCatCollectedObject] = useState();

    useEffect(() => {
        if(catCollectedObject !== undefined){

        }else{
            console.log("Cat is Undefined");
            const dummyListOfWords = [
                {
                  id: "1",
                  text: "Primary Accordion Comming from Component",
                  variant: "primary",
                  img: "https://media.tenor.com/WU0vkiK5dNAAAAAi/memes-cat.gif",
                }
              ];
              setCatCollectedObject(dummyListOfWords);
        }
    },[])
  return (
    <div className="container-fluid text-center">
    <div>

        <h1>Independent Cat page</h1>
        <p>This will show single cat.</p>
        <p>with Dynamic Routes</p>
    </div>
    <div>
        <p>{catCollectedObject.img}</p>
    </div>


    </div>
  )
}

export default CatPage