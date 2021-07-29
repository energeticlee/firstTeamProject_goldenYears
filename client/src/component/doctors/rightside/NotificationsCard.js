/* eslint-disable */
import React from "react";

const NotificationsCard = (props) => {
  const patient = props.patient;
  const handleAccept = props.handleAccept;
  const handleDecline = props.handleDecline;

  return (
    <div key={patient._id}>
      <div>{patient.name}</div>
      <button onClick={handleAccept(patient._id)}>Accept</button>
      <button onClick={handleDecline(patient._id)}>Decline</button>
    </div>
  );
};

export default NotificationsCard;
