import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewBus = () => {
  const [busData, setBusData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const deleteBus = (id) => {
    axios
      .delete(`http://localhost:4000/delete-bus/${id}`)
      .then(() => {
        alert("Bus Deleted Successfully");
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const filteredBusData = busData.filter(
    (bus) =>
      bus.busNumber
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      bus.busName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.driverId?.driverName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      bus.routeName?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header">
            <h3>View Buses</h3>
          </div>

          <div className="card-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Bus No, Name, Driver, or Route..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="table-responsive">
              <table className="table custom-table">
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
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBusData.length > 0 ? (
                    filteredBusData.map((value) => (
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
                            className="btn-delete"
                            onClick={() => deleteBus(value._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">
                        {searchTerm ? "No Buses Found" : "No Data Available"}
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
