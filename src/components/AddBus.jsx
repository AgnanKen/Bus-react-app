import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const AddBus = () => {
  const [drivers, setDrivers] = useState([]);

  const [bus, setBus] = useState({
    busNumber: "",
    busName: "",
    registrationNumber: "",
    capacity: "",
    driverId: "",
    routeName: "",
    startingPoint: "",
    endingPoint: "",
    distance: "",
    status: "Active",
  });

  // Fetch Drivers
  useEffect(() => {
    axios
      .get("http://localhost:4000/view-driver")
      .then((res) => {
        setDrivers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle Input
  const inputHandler = (e) => {
    setBus({
      ...bus,
      [e.target.name]: e.target.value,
    });
  };

  // Add Bus
  const readValues = () => {
    axios
      .post("http://localhost:4000/add-bus", bus)
      .then((res) => {
        alert("Bus Added Successfully");

        console.log(res.data);

        setBus({
          busNumber: "",
          busName: "",
          registrationNumber: "",
          capacity: "",
          driverId: "",
          routeName: "",
          startingPoint: "",
          endingPoint: "",
          distance: "",
          status: "Active",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to Add Bus");
      });
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">

            <div className="card shadow">

              <div className="card-header">
                <h3>Add Bus</h3>
              </div>

              <div className="card-body">

                <div className="row g-3">

                  <div className="col-md-6">
                    <label>Bus Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="busNumber"
                      value={bus.busNumber}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Bus Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="busName"
                      value={bus.busName}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Registration Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="registrationNumber"
                      value={bus.registrationNumber}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Capacity</label>
                    <input
                      type="number"
                      className="form-control"
                      name="capacity"
                      value={bus.capacity}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Driver</label>

                    <select
                      className="form-control"
                      name="driverId"
                      value={bus.driverId}
                      onChange={inputHandler}
                    >
                      <option value="">Select Driver</option>

                      {drivers.map((driver) => (
                        <option
                          key={driver._id}
                          value={driver._id}
                        >
                          {driver.driverName}
                        </option>
                      ))}
                    </select>

                  </div>

                  <div className="col-md-6">
                    <label>Route Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="routeName"
                      value={bus.routeName}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Starting Point</label>
                    <input
                      type="text"
                      className="form-control"
                      name="startingPoint"
                      value={bus.startingPoint}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Ending Point</label>
                    <input
                      type="text"
                      className="form-control"
                      name="endingPoint"
                      value={bus.endingPoint}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Distance (KM)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="distance"
                      value={bus.distance}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Status</label>

                    <select
                      className="form-control"
                      name="status"
                      value={bus.status}
                      onChange={inputHandler}
                    >
                      <option value="Active">Active</option>
                      <option value="Maintenance">Maintenance</option>
                      <option value="Inactive">Inactive</option>
                    </select>

                  </div>

                  <div className="col-12 text-center mt-4">
                    <button
                      className="btn btn-success"
                      onClick={readValues}
                    >
                      Add Bus
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

export default AddBus;