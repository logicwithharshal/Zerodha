import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0

function Navbar() {
  return (
    <nav
<<<<<<< HEAD
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <button
          class="navbar-toggler"
=======
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">

        <Link className="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
<<<<<<< HEAD
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Support
                </a>
              </li>
            </ul>
          </form>
=======
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>

          </ul>
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
