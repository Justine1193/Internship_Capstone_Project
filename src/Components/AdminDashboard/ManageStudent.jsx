import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardOverview from "./components/DashboardOverview";
import StudentTable from "./components/StudentTable";
import Footer from "./components/Footer";
import styles from "./ManageStudents.module.css";

const ManageStudents = () => {
  const [students, setStudents] = useState([
    { name: "John Doe", email: "john.doe@gmail.com", date: "2023-10-01" },
    { name: "Jane Doe", email: "jane.doe@gmail.com", date: "2023-10-06" },
    { name: "Ashley Adams", email: "ashley@gmail.com", date: "2023-10-12" },
    { name: "Michael Garcia", email: "michael@gmail.com", date: "2023-11-05" },
    { name: "Emily Jackson", email: "emily@gmail.com", date: "2023-11-19" },
    { name: "Joshua Lee", email: "joshua.lee@gmail.com", date: "2023-12-01" },
  ]);

  const handleDelete = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };

  const handleSuspend = (index) => {
    alert(`Student ${students[index].name} has been suspended.`);
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <DashboardOverview />
      <section className={styles.studentSection}>
        <h2>Manage Students</h2>
        <StudentTable 
          students={students} 
          handleDelete={handleDelete} 
          handleSuspend={handleSuspend} 
        />
      </section>
      <Footer />
    </div>
  );
};

export default ManageStudents;
