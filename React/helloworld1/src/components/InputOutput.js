// InputOutput
import React from "react";
import { useEffect, useState } from "react";

const PassingObject = () => {
  const [name, setname] = useState("");
  const [displayname, setdisplayname] = useState("");
  useEffect(() => {
    if (name.length === 0) {
      setdisplayname("Field is empty pls type something");
    } else {
      if (name == "padda") {
        setdisplayname(`${name} is a Developer in future`);
      }else if(name == "jay"){
        setdisplayname(`${name} is a Best Tutor`);
      }else{
        setdisplayname("You are typing: " + name);
      }
    }
  }, [name]);

  // clear function
  function clearEverything() {
    setname("");
    displayname("");
  }

  const code = (
    <div>
      <h1>Hello to the InputOutput</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Enter anything"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />
      <h1>{displayname}</h1>

      <button
        type="button"
        className="btn btn-primary"
        onClick={clearEverything}
      >
        Clear
      </button>
    </div>
  );
  return code;
};
export default PassingObject;
