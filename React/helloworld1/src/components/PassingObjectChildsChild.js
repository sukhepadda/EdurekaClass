// PassingObjectChildsChild
import React from "react";


const PassingObjectChildsChild = ({obj2}) => (
    //we are using round because there is only 1 return value like this a = (bently) => bently;
    <div>
    <h1>Village: {obj2.address.village} </h1>
    <h1>State: {obj2.address.state} </h1>
    <h1>Country: {obj2.address.country} </h1> 
    </div>
);

export default PassingObjectChildsChild;