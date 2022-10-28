import React from "react";
import { Link } from "react-router-dom";

function Common(props) {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> SajjanYadav</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <Link to={props.visit} className="btn btn-outline-primary">
                      {props.btname}
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src="https://cdn2.vectorstock.com/i/1000x1000/47/61/web-developer-design-vector-6584761.jpg"
                    className="img-fluid animated"
                    alt="home images"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;
