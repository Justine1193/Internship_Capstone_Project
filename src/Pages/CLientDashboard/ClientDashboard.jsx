import React from "react";
import "./ClientDashboard.css";
import FooterSection from "../../Components/StudentDashboard/Footersection.jsx";
import InternshipList from "../../Components/StudentDashboard/InternshipList.jsx";
import Navbar from "../../Components/StudentDashboard/Navbar.jsx";
import ClientDashboardContent from "../../Components/StudentDashboard/ClientDashboard.jsx";

const ClientDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="internship-list">
        <InternshipList />
      </div>
      <div className="client-dashboard-content">
        <ClientDashboardContent />
      </div>
      <div className="footer-section">
        <FooterSection />
      </div>
    </div>
  );
};

export default ClientDashboard;
