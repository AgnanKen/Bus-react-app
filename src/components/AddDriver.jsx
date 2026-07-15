import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";


const AddDriver = () => {
  const [driver, setDriver] = useState({
    driverId: "",
    driverName: "",
    phone: "",
    licenseNumber: "",
    experience: "",
    address: "",
    email: "",
    status: "Available",
  });

  const inputHandler = (e) => {
    setDriver({ ...driver, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    axios
      .post("http://localhost:5000/api/drivers", driver)
      .then((res) => {
        alert("Driver Added Successfully");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
   <Navbar/>

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">

            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h3>Add Driver</h3>
              </div>

              <div className="card-body">

                <div className="row g-3">

                  <div className="col-md-6">
                    <label>Driver ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="driverId"
                      value={driver.driverId}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Driver Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="driverName"
                      value={driver.driverName}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={driver.phone}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>License Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="licenseNumber"
                      value={driver.licenseNumber}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Experience (Years)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="experience"
                      value={driver.experience}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={driver.email}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-12">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="address"
                      value={driver.address}
                      onChange={inputHandler}
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label>Status</label>



                    <select
                      className="form-control"
                      name="status"
                      value={driver.status}
                      onChange={inputHandler}
                    >
                      <option>Available</option>
                      <option>On Leave</option>
                      <option>Suspended</option>
                    </select>
                  </div>

                  <div className="col-md-12 text-center mt-3">
                    <button
                      className="btn btn-success"
                      onClick={readValues}
                    >
                      Add Driver
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDriver;