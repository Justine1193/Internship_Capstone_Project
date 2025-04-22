import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardOverview from "./components/DashboardOverview";
import InternshipTable from "./components/InternshipTable";
import AddInternshipForm from "./components/AddInternshipForm";
import Footer from "./components/Footer";
import styles from "./AdminDashboard.module.css";

const AdminDashboard = () => {
  const [internships, setInternships] = useState([
    {
      title: "Graphic Design Internship",
      org: "XYZ Corp",
      desc: "Engage in visual content creation and branding.",
      req: "Portfolio required. Proficiency in Adobe Suite.",
      loc: "Remote",
      duration: "2 months",
      deadline: "2025-05-01",
      status: "Open",
    },
    {
      title: "Marketing Internship",
      org: "ABC Ltd",
      desc: "Assist in digital marketing strategies and promotions.",
      req: "Analytical skills. Social media savvy.",
      loc: "Onsite",
      duration: "3 months",
      deadline: "2025-04-15",
      status: "Pending",
    },
    {
      title: "Business Analyst Internship",
      org: "Intern Corp",
      desc: "In-depth market research and analysis.",
      req: "Critical thinking. Data interpretation.",
      loc: "Remote",
      duration: "2 months",
      deadline: "2025-04-30",
      status: "Open",
    },
  ]);

  const [newInternship, setNewInternship] = useState({
    title: "",
    org: "",
    desc: "",
    req: "",
    loc: "",
    duration: "",
    deadline: "",
    status: "Open",
  });

  const [showModal, setShowModal] = useState(false);

  const handleAdd = () => {
    const confirmed = window.confirm("Are you sure you want to add this internship?");
    if (!confirmed) return;

    setInternships([...internships, newInternship]);
    setNewInternship({
      title: "",
      org: "",
      desc: "",
      req: "",
      loc: "",
      duration: "",
      deadline: "",
      status: "Open",
    });
    setShowModal(false);
  };

  const handleDelete = (index) => {
    const updated = [...internships];
    updated.splice(index, 1);
    setInternships(updated);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNewInternship({
      title: "",
      org: "",
      desc: "",
      req: "",
      loc: "",
      duration: "",
      deadline: "",
      status: "Open",
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      <Navbar />
      <DashboardOverview internships={internships} />

      <section className={styles.manageSection}>
        <button className={styles.addButton} onClick={() => setShowModal(true)}>
          + Add Internship
        </button>

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <span className={styles.closeButton} onClick={handleCloseModal}>
                &times;
              </span>
              <h2 className={styles.modalTitle}>Add New Internship</h2>
              <AddInternshipForm
                newInternship={newInternship}
                setNewInternship={setNewInternship}
                handleAdd={handleAdd}
              />
            </div>
          </div>
        )}

        <InternshipTable internships={internships} handleDelete={handleDelete} />
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
