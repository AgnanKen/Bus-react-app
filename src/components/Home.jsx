import React from "react";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div>
      <Navbar/>

      <div className="container mt-5">

        <div className="text-center mb-5">
          <h1 className="text-primary">
            College Bus Management System
          </h1>

          <p className="lead">
            Manage buses, drivers and students in one place.
          </p>
        </div>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h3>🚌</h3>
                <h4>Bus Module</h4>
                <p>
                  Add and manage buses with routes and capacity.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h3>👨‍✈️</h3>
                <h4>Driver Module</h4>
                <p>
                  Store driver details and availability.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h3>🎓</h3>
                <h4>Student Module</h4>
                <p>
                  Allocate buses and maintain fee information.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;