/* eslint-disable */
import React from "react";

const NotificationsCard = (props) => {
  const patient = props.patient;
  const handleAccept = props.handleAccept;
  const handleDecline = props.handleDecline;

  return (
    <div className="card" key={patient._id}>
      <header className="card-header">
        <p class="card-header-title">{patient.name}</p>
      </header>
      <figure class="image is-4by3">
        <img
          src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
          alt="Placeholder image"
        />
      </figure>
      <div className="card-content">
        <div className="content">
          Email: {patient.email}
          <br />
          Gender: {patient.gender === null ? "Not Specified" : patient.gender}
          <br />
          Health Conditions:{" "}
          {patient.healthCondition === null
            ? "Not Specified"
            : patient.healthCondition}
        </div>
      </div>
      <footer className="card-footer">
        <button
          className="button is-primary is-light card-footer-item"
          onClick={handleAccept(patient._id)}
        >
          Accept
        </button>
        <button
          className="button is-primary is-light card-footer-item"
          onClick={handleDecline(patient._id)}
        >
          Decline
        </button>
      </footer>
    </div>
  );
};

export default NotificationsCard;
