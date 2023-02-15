// InputOutput
import React from "react";
import { useEffect, useState } from "react";

const PassingObject = () => {
    const [name, setname] = useState("padda");
    useEffect(() => {
        if(name.length === 0){
            setname("name is empty");
        }
    }, [name]);
  
  const code = (
    <div>
      <h1>Hello to the InputOutput</h1>
      <input 
            type="text"
            className="form-control"
            placeholder="Enter anything"
            onChange={e => setname(e.target.value)}
            value={name}
      />
      <h1>{name}</h1>
    </div>
  );
  return code;
};
export default PassingObject;
