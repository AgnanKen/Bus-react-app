import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewDriver = () => {
  const [drivers, setDrivers] = useState([]);

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

  // const deleteDriver = (id) => {
  //   axios.delete("http://localhost:5000/api/drivers/${id}").then(() => {
  //       alert("Driver Deleted Successfully");
  //       fetchDrivers();
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
     <Navbar/>

      <div className="container mt-4">

        <div className="card shadow">

          <div className="card-header bg-primary text-white">
            <h3>View Drivers</h3>
          </div>

          <div className="card-body">

            <table className="table table-bordered table-hover">

              <thead className="table-dark">

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

                {drivers.map((value) => (
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
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteDriver(value._id)}
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

export default ViewDriver;