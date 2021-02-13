import React, { useState, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements
} from "react-flow-renderer";
import DiamondNode from "../CustomNode/DiamondNode";
import InputNode from "../CustomNode/InputNode";
import SideBar from "../SideBar/SideBar";
import "./FlowChart.css";
// initial Elements set it to empty arry.
const initialElements = [];
let id = 0;
const getId = () => `dndnode_${id++}`;
// Custom nodes here.
const nodeTypes = {
  diamondNode: DiamondNode,
  inputNode: InputNode
};

export default function FlowChart() {
  // useRef reference.
  const reactFlowWrapper = useRef(() => null);
  // useState Hooks.
  const [reactFlowInstance, setReactFlowInstance] = useState(() => null);
  const [elements, setElements] = useState(() => initialElements);
  // Utils to setData in elements
  const onConnect = params => setElements(els => addEdge(params, els));
  // Utils to remove elements
  const onElementsRemove = elementsToRemove =>
    setElements(els => removeElements(elementsToRemove, els));
  // setting instance on load.
  const onLoad = _reactFlowInstance => setReactFlowInstance(_reactFlowInstance);
  // to capture the drag over event.
  const onDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  // to capture the on drop event.
  const onDrop = event => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow");
    const className = event.dataTransfer.getData("text/plain");
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top
    });
    const newNode = {
      id: getId(),
      type,
      position,
      data: { label: `${type}` },
      className
    };
    setElements(es => es.concat(newNode));
  };

  // on click of button resetting the flow elements.
  const handleReset = () => {
    setElements([]);
  };

  return (
    <section className="flowchart">
      <ReactFlowProvider>
        <section className="draggable-component">
          <SideBar />
        </section>
        <section className="dropping-component" ref={reactFlowWrapper}>
          <aside>
            <button type="button" onClick={() => handleReset()}>
              Reset
            </button>
          </aside>
          <ReactFlow
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            nodeTypes={nodeTypes}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
          ></ReactFlow>
        </section>
      </ReactFlowProvider>
    </section>
  );
}
