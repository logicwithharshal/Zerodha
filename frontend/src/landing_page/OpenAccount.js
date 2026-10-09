<<<<<<< HEAD
import React from "react";
=======
import { Link } from "react-router-dom";
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
<<<<<<< HEAD
=======

>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
<<<<<<< HEAD
        <button
=======

        <Link
          to="/signup"
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
<<<<<<< HEAD
        </button>
=======
        </Link>
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
      </div>
    </div>
  );
}

export default OpenAccount;
