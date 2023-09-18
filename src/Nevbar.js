import React from "react";

function Nevbar() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="q">
        <div className="container-fluid">
          <a className="navbar-brand" id="i" href="#">
            <button className="btn btn-outline-success me-2">Home</button>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  id="q1"
                >
                  {" "}
                  <button>About us</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="q1" href="#">
                  <button>Book Request</button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="q1" href="#">
                  <button> Text Book </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="q1">
                  <button> festivel Book </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="q1">
                  <button> Events </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="q1">
                  <button> Store location</button>
                </a>
              </li>
              <li className="nav-item">
                <div className="btn btn-outline-success" href="#">
                  <button> contact us </button>
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-8"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
   
    </div>
  );
}
export default Nevbar;
