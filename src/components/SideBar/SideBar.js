import React, { useState } from "react";
import { NEW_SCENES_NODE, SCENES_IN_CAST } from "../Constant/Constant";
import "./SideBar.css";

export default function SideBar() {
  // useState Hooks.
  const [nodes, setNodes] = useState(() => NEW_SCENES_NODE);
  const [castNodes, setCastNodes] = useState(() => SCENES_IN_CAST);

  /***
   * This function will trigger on drag of the any flow items.
   */
  const onDragStart = (event, nodeType) => {
    const clsName = (event && event.currentTarget.className) || "defaultNode";
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("text/plain", clsName);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="scenes">
      {/** New Scenes block start */}
      <section>
        <h4 className="flow-title">New Scenes</h4>
        {nodes.map(item => (
          <div
            key={item.id}
            title={item.title}
            className={item.nodeView}
            onDragStart={event => onDragStart(event, item.type)}
            draggable
          >
            {item.title}
          </div>
        ))}
      </section>
      {/** New Scenes block end */}
      {/** scenes in cast block start*/}
      <section>
        <h4 className="flow-title">Scenes in this Cast</h4>
        {castNodes.map(item => (
          <div
            key={item.id}
            title={item.title}
            className={item.nodeView}
            onDragStart={event => onDragStart(event, item.type)}
            draggable
          >
            {item.title}
          </div>
        ))}
      </section>
      {/** scenes in cast block end*/}
    </aside>
  );
}
