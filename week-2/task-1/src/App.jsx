import React from "react";
import "./index.css";

function UserCard({ name, email, age, color }) {
  return (
    <div className="user-card" style={{ background: color || "" }}>
      <h2>{name}</h2>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
}

export default UserCard;
