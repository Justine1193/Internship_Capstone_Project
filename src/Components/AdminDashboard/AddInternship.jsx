import React from "react";
import styles from "./AddInternshipForm.module.css";

const AddInternshipForm = ({ newInternship, setNewInternship, handleAdd }) => {
  const handleChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.form}>
      {["title", "org", "desc", "req", "loc", "duration", "deadline"].map((field) => (
        <input
          key={field}
          type="text"
          name={field}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          value={newInternship[field]}
          onChange={handleChange}
          className={styles.input}
        />
      ))}
      <button type="button" onClick={handleAdd} className={styles.button}>
        Add Internship
      </button>
    </form>
  );
};

export default AddInternshipForm;
