import React from "react";

function CreateTicket() {
  const topics = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">
          To create a ticket, select a relevant topic
        </h1>

        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className="col-4 p-5 mt-2 mb-2" key={item}>
            <h4>
              <i
                className="fa fa-plus-circle"
                aria-hidden="true"
              ></i>{" "}
              Account Opening
            </h4>

            {topics.map((topic, index) => (
              <React.Fragment key={index}>
                <a
                  href=""
                  style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                  }}
                >
                  {topic}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
