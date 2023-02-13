import React from "react";

const FirstComponents = () => (
  //we are using round because there is only 1 return value like this a = (bently) => bently;
  <div>
    <header>
      <nav
        className="fixed-top border-bottom navbar navbar-expand-lg navbar-dark bg-danger"
        id="home"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Jimmy Sheirgill
          </a>
        </div>
      </nav>
    </header>
  </div>
);

export default FirstComponents;
