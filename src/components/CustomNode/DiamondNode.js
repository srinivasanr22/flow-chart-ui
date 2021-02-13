import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
/**
 * TODO: update the css to make diamond look for this custom node.
 */
export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        id="custom_top"
        style={{ background: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
      />
      <div style={{ marginLeft: "5px" }}>{data.label}</div>
      <Handle
        type="target"
        position="left"
        id="custom_left"
        style={{ background: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position="right"
        id="custom_right"
        style={{ background: "#555" }}
      />
      <Handle
        type="source"
        position="bottom"
        id="custom_bottom"
        style={{ top: "auto", background: "#555" }}
      />
    </>
  );
});
