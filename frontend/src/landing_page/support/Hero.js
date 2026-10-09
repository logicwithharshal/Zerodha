import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
<<<<<<< HEAD
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
=======
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>

        <Link to="/support">Track Tickets</Link>
      </div>

>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
<<<<<<< HEAD
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
=======

          <input placeholder="Eg. how do I activate F&O" />

          <br />

          <Link to="/support">Track account opening</Link>
          <Link to="/support">Track segment activation</Link>
          <Link to="/support">Intraday margins</Link>
          <Link to="/support">Kite user manual</Link>
        </div>

        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>

>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
<<<<<<< HEAD
=======

>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
