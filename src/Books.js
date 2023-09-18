import React from "react";
import a1 from "./image/back.jpg";
import i from "./image/bb1.jpg";
import i1 from "./image/bb2.jpg";
import i2 from "./image/bb3.jpg";
import o1 from "./image/bb5.jpg";
import o2 from "./image/bb6.jpg";
import o3 from "./image/bb7.jpg";
import t from "./image/table.jpg";

function Book() {
  return (
    <div>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <div className="card text-bg-dark">
        <div className="d-flex">
          <img src={a1} className="card-img" id="op" alt="..." />

          <img src={a1} className="card-img" id="op1" alt="..." />
          <img src={o1} id="o111" className="card-img" alt="..." />
          <img src={o2} id="o222" className="card-img" alt="..." />
          <img src={o3} id="o333" className="card-img" alt="..." />

          <div className="card-img-overlay">
            <h5 className="card-title">New Books upcoming</h5>
            <img src={i} id="o11" className="card-img" alt="..." />
            <img src={i1} id="o12" className="card-img" alt="..." />
            <img src={i2} id="o13" className="card-img" alt="..." />

            <img src={t} className="card-img" id="oo" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Book;
