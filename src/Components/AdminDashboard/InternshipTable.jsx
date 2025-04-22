import React from "react";
import styles from "./InternshipTable.module.css";

const InternshipTable = ({ internships, handleDelete }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Org</th>
          <th>Location</th>
          <th>Duration</th>
          <th>Deadline</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {internships.map((item, idx) => (
          <tr key={idx}>
            <td>{item.title}</td>
            <td>{item.org}</td>
            <td>{item.loc}</td>
            <td>{item.duration}</td>
            <td>{item.deadline}</td>
            <td>{item.status}</td>
            <td>
              <button onClick={() => handleDelete(idx)} className={styles.deleteBtn}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InternshipTable;
