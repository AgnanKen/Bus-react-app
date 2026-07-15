import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios
      .get("http://localhost:4000/view-student")
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = (id) => {
    axios
      .delete(`http://localhost:4000/delete-student/:id`)
      .then(() => {
        alert("Student Deleted Successfully");
        fetchStudents();
      })
      .catch((err) => console.log(err));
  };



  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header">
            <h3>View Students</h3>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Bus</th>
                    <th>Semester</th>
                    <th>Amount</th>
                    <th>Due Date</th>
                    <th>Payment</th>
                    <th>Academic Year</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {students.length > 0 ? (
                    students.map((value) => (
                      <tr key={value._id}>
                        <td>{value.studentId}</td>
                        <td>{value.fullName}</td>
                        <td>{value.department}</td>
                        <td>{value.assignedBusNumber}</td>
                        <td>{value.semester}</td>
                        <td>₹ {value.amount}</td>
                        <td>{value.dueDate?.substring(0, 10)}</td>
                        <td>{value.paymentMode}</td>
                        <td>{value.academicYear}</td>
                        <td>{value.feeStatus}</td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">
                        No Students Found
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

export default ViewStudent;
