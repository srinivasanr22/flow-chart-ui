// NodeView constants.
const NODE_VIEW = {
  DEFAULT_NODE: "defaultNode",
  NODE_GREY: "defaultNode grey",
  NODE_SAFFRON: "defaultNode saffron",
  NODE_GREEN: "defaultNode green",
  DIAMOND_NODE: "diamondNode",
  DIAMOND_YELLOW: "diamondNode yellow",
  DIAMOND_ORANGE: "diamondNode orange",
  DIAMOND_PINK: "diamondNode pink"
};

// Creating JSON for Scene Node - which displays in sidebar.
const NEW_SCENES_NODE = [
  { name: "node_1", nodeView: NODE_VIEW.DEFAULT_NODE, type: "input", id: 1 },
  { name: "node_2", nodeView: NODE_VIEW.DEFAULT_NODE, type: "input", id: 2 },
  { name: "node_3", nodeView: NODE_VIEW.DEFAULT_NODE, type: "input", id: 3 },
  { name: "node_4", nodeView: NODE_VIEW.DEFAULT_NODE, type: "input", id: 4 },
  { name: "node_5", nodeView: NODE_VIEW.DEFAULT_NODE, type: "input", id: 5 },
  { name: "node_6", nodeView: NODE_VIEW.DEFAULT_NODE, type: "input", id: 6 },
  {
    name: "node_7",
    nodeView: NODE_VIEW.DIAMOND_NODE,
    type: "diamondInput",
    id: 7
  }
];

// Creating JSON for Scenes in Cast - which displays in sidebar.
const SCENES_IN_CAST = [
  {
    name: "node_cast_1",
    nodeView: NODE_VIEW.NODE_GREY,
    type: "input",
    id: 1
  },
  {
    name: "node_cast_2",
    nodeView: NODE_VIEW.NODE_SAFFRON,
    type: "input",
    id: 2
  },
  {
    name: "node_cast_3",
    nodeView: NODE_VIEW.NODE_GREEN,
    type: "input",
    id: 3
  },
  {
    name: "node_cast_4",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "input",
    id: 4
  },
  {
    name: "node_cast_5",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "input",
    id: 5
  },
  {
    name: "node_cast_6",
    nodeView: NODE_VIEW.DIAMOND_YELLOW,
    type: "input",
    id: 6
  },
  {
    name: "node_cast_7",
    nodeView: NODE_VIEW.DIAMOND_ORANGE,
    type: "diamondInput",
    id: 7
  },
  {
    name: "node_cast_8",
    nodeView: NODE_VIEW.DIAMOND_PINK,
    type: "diamondInput",
    id: 8
  }
];

export { NODE_VIEW, NEW_SCENES_NODE, SCENES_IN_CAST };
