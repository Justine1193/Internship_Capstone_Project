import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DashboardOverview from "./components/DashboardOverview";
import ResourceForm from "./components/ResourceForm";
import ResourceList from "./components/ResourceList";
import Footer from "./components/Footer";
import styles from "./ManageResources.module.css";

const ManageResources = () => {
  const [resources, setResources] = useState([
    { title: "Resource Title 1" },
    { title: "Resource Title 2" },
  ]);

  const [newResource, setNewResource] = useState({
    title: "",
    file: null,
  });

  const handleUpload = () => {
    if (!newResource.title || !newResource.file) return;
    setResources([...resources, { title: newResource.title }]);
    setNewResource({ title: "", file: null });
  };

  const handleDelete = (index) => {
    const updated = [...resources];
    updated.splice(index, 1);
    setResources(updated);
  };

  const handleEdit = (index) => {
    alert(`Edit resource: ${resources[index].title}`);
  };

  return (
    <div className={styles.resourceContainer}>
      <Navbar />
      <DashboardOverview />
      <section className={styles.manageResources}>
        <h2>Manage Resources</h2>
        <div className={styles.flexContainer}>
          <ResourceForm 
            newResource={newResource} 
            setNewResource={setNewResource} 
            handleUpload={handleUpload} 
          />
          <ResourceList 
            resources={resources} 
            handleEdit={handleEdit} 
            handleDelete={handleDelete} 
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ManageResources;
