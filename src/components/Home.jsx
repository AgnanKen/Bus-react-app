import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="home-container">

        {/* Hero Section */}

        <div className="hero-section">

          <h1 className="hero-title">
            College Bus Management System
          </h1>

          <p className="hero-subtitle">
            Smart, secure and efficient management of buses, drivers,
            students and transport fee records.
          </p>

        </div>

        {/* Cards */}

        <div className="row mt-5">

          <div className="col-lg-4 col-md-6 mb-4">

            <div className="home-card">

              <div className="icon">🚌</div>

              <h3>Bus Module</h3>

              <p>
                Add buses, assign routes, manage seating capacity and
                maintain transport information.
              </p>

            </div>

          </div>

          <div className="col-lg-4 col-md-6 mb-4">

            <div className="home-card">

              <div className="icon">👨‍✈️</div>

              <h3>Driver Module</h3>

              <p>
                Maintain driver profiles, licenses, contact details and
                availability.
              </p>

            </div>

          </div>

          <div className="col-lg-4 col-md-12 mb-4">

            <div className="home-card">

              <div className="icon">🎓</div>

              <h3>Student Module</h3>

              <p>
                Register students, allocate buses, monitor transport fees
                and payment status.
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;