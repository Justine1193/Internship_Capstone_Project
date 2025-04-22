import React from "react";
import styles from "./ResourceList.module.css";

const ResourceList = ({ resources, handleEdit, handleDelete }) => {
  return (
    <div className={styles.resourceList}>
      <h3>Existing Resources</h3>
      {resources.map((res, index) => (
        <div key={index} className={styles.resourceItem}>
          <span>{res.title}</span>
          <button onClick={() => handleEdit(index)} className={styles.editBtn}>
            Edit
          </button>
          <button onClick={() => handleDelete(index)} className={styles.deleteBtn}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
