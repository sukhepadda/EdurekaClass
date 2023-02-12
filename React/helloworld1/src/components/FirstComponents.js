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
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="nav navbar-nav m-auto ">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#welcome">
                    Welcome
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#movies">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#top3">
                    Top 3 Movies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  </div>
);

export default FirstComponents;