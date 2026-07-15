import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const ViewStudent = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredStudents = students.filter(
    (student) =>
      student.studentId
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      student.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.assignedBusNumber
        ?.toString()
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Navbar />

      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header">
            <h3>View Students</h3>
          </div>

          <div className="card-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by ID, Name, Department, or Bus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((value) => (
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

                        <td>
                          <button
                            className="btn-delete me-2"
                            onClick={() => deleteStudent(value._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center">
                        {searchTerm ? "No Students Found" : "No Data Available"}
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
