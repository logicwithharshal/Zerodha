import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
<<<<<<< HEAD
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
=======
          <img src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>

          <p>{productDesription}</p>

          <div>
            <a href={tryDemo}>Try Demo</a>

            <a
              href={learnMore}
              style={{ marginLeft: "50px" }}
            >
              Learn More
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Download on Google Play"
              />
            </a>

            <a href={appStore}>
              <img
                src="/media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
                alt="Download on the App Store"
>>>>>>> c4d0329a0cc11d5cc7f1747bcb30e38814316ce0
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
