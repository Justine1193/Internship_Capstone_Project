import React from "react";
import styles from "./StudentTable.module.css";

const StudentTable = ({ students, handleDelete, handleSuspend }) => {
  return (
    <table className={styles.studentTable}>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Email</th>
          <th>Registration Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.date}</td>
            <td>
              <button onClick={() => handleSuspend(index)} className={styles.suspendBtn}>Suspend</button>
              <button onClick={() => handleDelete(index)} className={styles.deleteBtn}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
