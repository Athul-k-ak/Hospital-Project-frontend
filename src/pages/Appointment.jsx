import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/appointment.css";

const Appointment = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Add Appointment",
      desc: "Schedule a new appointment for patients.",
      btnText: "Add",
      route: "/appointment/add",
      color: "primary",
    },
    {
      title: "View All Appointments",
      desc: "See the list of all scheduled appointments.",
      btnText: "View All",
      route: "/appointment/all",
      color: "success",
    },
    {
      title: "Appointments by Doctor",
      desc: "Filter appointments based on doctor.",
      btnText: "Filter",
      route: "/appointment/by-doctor",
      color: "info",
    },
  ];

  return (
    <DashboardLayout>
      <div className="container py-4">
        <h3 className="mb-4">Appointment Management</h3>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div className="col-md-4" key={index}>
              <div className={`card border-${card.color} h-100 shadow-sm`}>
                <div className={`card-body text-${card.color}`}>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.desc}</p>
                  <button
                    className={`btn btn-${card.color} mt-2`}
                    onClick={() => navigate(card.route)}
                  >
                    {card.btnText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Appointment;
