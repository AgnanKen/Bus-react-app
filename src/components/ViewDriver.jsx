import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewDriver = () => {
  const [drivers, setDrivers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDrivers = () => {
    axios
      .get("http://localhost:4000/view-driver")
      .then((res) => {
        setDrivers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const deleteDriver = (id) => {
    axios
      .delete("http://localhost:5000/api/drivers/:{id}")
      .then(() => {
        alert("Driver Deleted Successfully");
        fetchDrivers();
      })
      .catch((err) => console.log(err));
  };

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.driverId
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      driver.driverName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.phone
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      driver.licenseNumber?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h3>View Drivers</h3>
          </div>

          <div className="card-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Driver ID, Name, Phone, or License..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="table-responsive custom-table-container">
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th>Driver ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>License No</th>
                    <th>Experience</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredDrivers.length > 0 ? (
                    filteredDrivers.map((value) => (
                      <tr key={value._id}>
                        <td>{value.driverId}</td>
                        <td>{value.driverName}</td>
                        <td>{value.phone}</td>
                        <td>{value.licenseNumber}</td>
                        <td>{value.experience} Years</td>
                        <td>{value.email}</td>
                        <td>{value.address}</td>
                        <td>{value.status}</td>

                        <td>
                          <button
                            className="btn-delete"
                            onClick={() => deleteDriver(value._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center">
                        {searchTerm ? "No Drivers Found" : "No Data Available"}
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

export default ViewDriver;
