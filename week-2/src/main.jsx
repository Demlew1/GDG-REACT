import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UserCard from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserCard
      name="Demtse"
      email="demtse.yibabe@gmail.com"
      age={21}
      color="lightblue"
    />
  </React.StrictMode>
);
