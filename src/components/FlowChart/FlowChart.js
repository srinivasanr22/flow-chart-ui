import React, { useState, useRef } from "react";
import SideBar from "../SideBar/SideBar";
import "./FlowChart.css";

export default function FlowChart() {
  return (
    <section className="flowchart">
      <section className="draggable-component">
        <SideBar />
      </section>
      <section className="dropping-component"></section>
    </section>
  );
}
