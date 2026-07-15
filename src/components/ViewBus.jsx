import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewBus = () => {
  const [busData, setBusData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/view-bus")
      .then((res) => {
        setBusData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const deleteBus = (id) => {
  //   axios
  //     .delete(`http://localhost:5000/api/buses/${id}`)
  //     .then(() => {
  //       alert("Bus Deleted Successfully");
  //       fetchData();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h3>View Bus</h3>
          </div>

          <div className="card-body">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Bus No</th>
                  <th>Name</th>
                  <th>Registration</th>
                  <th>Capacity</th>
                  <th>Driver</th>
                  <th>Route</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Distance</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {busData.map((value) => (
                  <tr key={value._id}>
                    <td>{value.busNumber}</td>
                    <td>{value.busName}</td>
                    <td>{value.registrationNumber}</td>
                    <td>{value.capacity}</td>
                    <td>
                      {value.driverId
                        ? value.driverId.driverName
                        : "Not Assigned"}
                    </td>
                    <td>{value.routeName}</td>
                    <td>{value.startingPoint}</td>
                    <td>{value.endingPoint}</td>
                    <td>{value.distance} KM</td>
                    <td>{value.status}</td>

                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteBus(value._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBus;
