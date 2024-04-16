import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}
