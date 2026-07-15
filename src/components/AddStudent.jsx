import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const AddStudent = () => {
  const [buses, setBuses] = useState([]);

  const [student, setStudent] = useState({
    studentId: "",
    fullName: "",
    department: "",
    assignedBusNumber: "",
    feeId: "",
    semester: "",
    amount: "",
    dueDate: "",
    paymentMode: "UPI",
    academicYear: "",
    feeStatus: "Pending",
  });

  // Fetch buses for dropdown
  useEffect(() => {
    axios
      .get("http://localhost:4000/view-bus")
      .then((res) => {
        setBuses(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const readValues = () => {
    axios
      .post("http://localhost:4000/add-student", student)
      .then((res) => {
        alert("Student Added Successfully");

        setStudent({
          studentId: "",
          fullName: "",
          department: "",
          assignedBusNumber: "",
          feeId: "",
          semester: "",
          amount: "",
          dueDate: "",
          paymentMode: "UPI",
          academicYear: "",
          feeStatus: "Pending",
        });

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card shadow">

              <div className="card-header">
                <h3>Add Student</h3>
              </div>

              <div className="card-body">

                <div className="row g-3">

                  <div className="col-md-6">
                    <label>Student ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="studentId"
                      value={student.studentId}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={student.fullName}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Department</label>
                    <input
                      type="text"
                      className="form-control"
                      name="department"
                      value={student.department}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Assigned Bus</label>

                    <select
                      className="form-select"
                      name="assignedBusNumber"
                      value={student.assignedBusNumber}
                      onChange={inputHandler}
                    >
                      <option value="">Select Bus</option>

                      {buses.length > 0 ? (
                        buses.map((bus) => (
                          <option key={bus._id} value={bus.busNumber}>
                            {bus.busNumber} - {bus.busName}
                          </option>
                        ))
                      ) : (
                        <option disabled>No Buses Available</option>
                      )}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Fee ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="feeId"
                      value={student.feeId}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Semester</label>
                    <input
                      type="text"
                      className="form-control"
                      name="semester"
                      value={student.semester}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      name="amount"
                      value={student.amount}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Due Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dueDate"
                      value={student.dueDate}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Payment Mode</label>

                    <select
                      className="form-select"
                      name="paymentMode"
                      value={student.paymentMode}
                      onChange={inputHandler}
                    >
                      <option value="UPI">UPI</option>
                      <option value="NetBanking">Net Banking</option>
                      <option value="Card">Card</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Academic Year</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="2026-2027"
                      name="academicYear"
                      value={student.academicYear}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Fee Status</label>

                    <select
                      className="form-select"
                      name="feeStatus"
                      value={student.feeStatus}
                      onChange={inputHandler}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Paid">Paid</option>
                      <option value="Exempted">Exempted</option>
                      <option value="No Transport">No Transport</option>
                    </select>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button
                      className="btn btn-success"
                      onClick={readValues}
                    >
                      Add Student
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

export default AddStudent;