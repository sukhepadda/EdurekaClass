// PassingObject
import React from "react";

import PassingObjectChild from "./PassingObjectChild";

// dummy json data

const dummyData = {
  name: "Sidhu Moosewala",
  profession: "Rapper",
  address: {
    village: "Moosa Pind",
    state: "Punjab",
    country: "India",
  },
};
const dummyData2 = [
  {
    name: "Sidhu Moosewala2",
    profession: "Rapper2",
    address: {
      village: "Moosa Pind2",
      state: "Punjab2",
      country: "India2",
    },
  },
  {
    name: "Sidhu Moosewala3",
    profession: "Rapper3",
    address: {
      village: "Moosa Pind3",
      state: "Punjab3",
      country: "India3",
    },
  },
];
const PassingObject = () => (
  //we are using round because there is only 1 return value like this a = (bently) => bently;
  <div>
    <h1>Hello to the object parent</h1>
    <PassingObjectChild obj1={dummyData} />
    <PassingObjectChild obj1={dummyData2[0]} />
    <PassingObjectChild obj1={dummyData2[1]} />
  </div>
);

export default PassingObject;
