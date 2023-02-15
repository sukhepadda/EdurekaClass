// PassingObjectChild
import React from "react";

import PassingObjectChildsChild from "./PassingObjectChildsChild";

const PassingObjectChild = ({obj1}) => (
    //we are using round because there is only 1 return value like this a = (bently) => bently;
    <div>
    <hr />
     <h1>Name: {obj1.name}</h1>
   <h1>Profession: {obj1.profession}: </h1>
    <PassingObjectChildsChild obj2 = {obj1} />
    </div>
);

export default PassingObjectChild;