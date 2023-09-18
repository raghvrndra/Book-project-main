import React from "react";

import a2 from "./image/table.jpg"
import a0 from "./image/b5.jpg"
import Footer from './Footer';
import a01 from "./image/b3.jpg"
import a02 from "./image/b4.jpg"
import a03 from "./image/b5.jpg"
import a04 from "./image/b7.jpg"
import video1 from "./image/video1.mp4"
import Book from "./Books";




function Fs1() {



    return (
        <div >
           <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<div className="card text">
{/* <video src={video1}onClick={handel} id="vedio-slider" loop="loop"  autoplay="true"> </video> */}

<video loop autoPlay >
       <source src={require('./image/video1.mp4')} type="video/mp4" />
</video>



  <div className="card-img-overlay">
 
  <img src={a2} id="o" className="card-img" width={70} alt="..."/>
  <img src={a0} id="r" className="card-img" alt="..."/>
  <img src={a01} id="r1" className="card-img" alt="..."/>
  <img src={a02} id="r2" className="card-img" alt="..."/>
  <img src={a03} id="r3" className="card-img" alt="..."/>
  <img src={a04} id="r4" className="card-img" alt="..."/>
 
</div>
<div >
  

< Book/>
  </div>
 

</div> 
 <Footer/>

        </div>
    )
}
export default Fs1;