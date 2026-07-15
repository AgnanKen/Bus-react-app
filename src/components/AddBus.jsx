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

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/drivers")
            .then((res) => setDrivers(res.data))
            .catch((err) => console.log(err));
    }, []);

    const inputHandler = (e) => {
        setBus({ ...bus, [e.target.name]: e.target.value });
    };

    const readValues = () => {
        axios
            .post("http://localhost:5000/api/buses", bus)
            .then((res) => {
                alert("Bus Added Successfully");
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
                                            <option>Select Driver</option>

                                            {drivers.map((value) => (
                                                <option value={value._id}>
                                                    {value.driverName}
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
                                            <option>Active</option>
                                            <option>Maintenance</option>
                                            <option>Inactive</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12 text-center mt-3">
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
