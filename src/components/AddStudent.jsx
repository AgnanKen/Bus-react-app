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

  useEffect(() => {
    axios
      .get("http://localhost:4000/view-student")
      .then((res) => setBuses(res.data))
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const readValues = () => {
    axios
      .post("http://localhost:4000/add-student", student)
      .then((res) => {
        alert("Student Added Successfully");
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
                      className="form-control"
                      name="assignedBusNumber"
                      value={student.assignedBusNumber}
                      onChange={inputHandler}
                    >
                      <option>Select Bus</option>

                      {buses.map((value) => (
                        <option
                          key={value._id}
                          value={value.busNumber}
                        >
                          {value.busNumber}
                        </option>
                      ))}
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
                      className="form-control"
                      name="paymentMode"
                      value={student.paymentMode}
                      onChange={inputHandler}
                    >
                      <option>UPI</option>
                      <option>NetBanking</option>
                      <option>Card</option>
                      <option>Cash</option>
                    </select>

                  </div>

                  <div className="col-md-6">
                    <label>Academic Year</label>
                    <input
                      type="text"
                      className="form-control"
                      name="academicYear"
                      placeholder="2026-2027"
                      value={student.academicYear}
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Fee Status</label>

                    <select
                      className="form-control"
                      name="feeStatus"
                      value={student.feeStatus}
                      onChange={inputHandler}
                    >
                      <option>Paid</option>
                      <option>Pending</option>
                      <option>Exempted</option>
                      <option>No Transport</option>
                    </select>

                  </div>

                  <div className="col-md-12 text-center mt-3">
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