import React, { memo } from "react";
import { Handle } from "react-flow-renderer";

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        id="input_left"
        style={{ background: "#555" }}
        onConnect={params => console.log("handle onConnect", params)}
      />
      <div style={{ marginLeft: "5px" }}>{data.label}</div>
      <Handle
        type="source"
        position="right"
        id="input_right"
        style={{ background: "#555" }}
      />
    </>
  );
});
