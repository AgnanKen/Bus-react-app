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
  //     .delete(`http://localhost:4000/delete-bus/${id}`)
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

          <div className="card-header">
            <h3>View Buses</h3>
          </div>

          <div className="card-body">

            <div className="table-responsive">

              <table
                className="table custom-table"
                style={{ minWidth: "1400px" }}
              >

                <thead>
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
                  </tr>
                </thead>

                <tbody>

                  {busData.length > 0 ? (
                    busData.map((value) => (
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

            
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">
                        No Buses Found
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ViewBus;