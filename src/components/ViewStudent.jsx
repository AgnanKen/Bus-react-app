import React, { useState, useEffect } from "react";
import axios from "axios";
// import NavBar from "./NavBar";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios
      .get("http://localhost:5000/api/students")
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
      .delete(`http://localhost:5000/api/students/${id}`)
      .then(() => {
        alert("Student Deleted Successfully");
        fetchStudents();
      })
      .catch((err) => console.log(err));
  };

  const removeFee = (id) => {
    axios
      .delete(`http://localhost:5000/api/students/${id}/fee`)
      .then(() => {
        alert("Bus Fee Removed Successfully");
        fetchStudents();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* <NavBar /> */}

      <div className="container mt-4">

        <div className="card shadow">

          <div className="card-header bg-primary text-white">
            <h3>View Students</h3>
          </div>

          <div className="card-body">

            <table className="table table-bordered table-hover">

              <thead className="table-dark">

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
                  <th>Actions</th>
                </tr>

              </thead>

              <tbody>

                {students.map((value) => (
                  <tr key={value._id}>

                    <td>{value.studentId}</td>
                    <td>{value.fullName}</td>
                    <td>{value.department}</td>
                    <td>{value.assignedBusNumber}</td>
                    <td>{value.semester}</td>
                    <td>{value.amount}</td>
                    <td>{value.dueDate?.substring(0,10)}</td>
                    <td>{value.paymentMode}</td>
                    <td>{value.academicYear}</td>
                    <td>{value.feeStatus}</td>

                    <td>

                      <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => deleteStudent(value._id)}
                      >
                        Delete
                      </button>

                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => removeFee(value._id)}
                      >
                        Remove Fee
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

export default ViewStudent;