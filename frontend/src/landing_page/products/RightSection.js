import React from "react";

<<<<<<< HEAD
function RightSection({ imageURL, productName, productDesription, learnMore }) {
=======
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
<<<<<<< HEAD
          <p>{productDesription}</p>
=======

          <p>{productDescription}</p>

>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-6">
          <img src={imageURL} />
=======

        <div className="col-6">
          <img src={imageURL} alt={productName} />
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
        </div>
      </div>
    </div>
  );
}

export default RightSection;
