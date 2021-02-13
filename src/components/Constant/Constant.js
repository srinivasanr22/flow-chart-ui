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
  {
    name: "node_1",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "input",
    id: 1,
    title: "Input Node"
  },
  {
    name: "node_2",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "output",
    id: 2,
    title: "Output Node"
  },
  {
    name: "node_3",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "default",
    id: 3,
    title: "Default Node"
  },
  {
    name: "node_4",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "input",
    id: 4,
    title: "Input Node"
  },
  {
    name: "node_5",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "output",
    id: 5,
    title: "Output Node"
  },
  {
    name: "node_6",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "inputNode",
    id: 6,
    title: "Default Node"
  },
  {
    name: "node_cast_7",
    nodeView: NODE_VIEW.DIAMOND_NODE,
    type: "diamondNode",
    id: 7,
    title: "Diamond Node"
  }
];

// Creating JSON for Scenes in Cast - which displays in sidebar.
const SCENES_IN_CAST = [
  {
    name: "node_cast_1",
    nodeView: NODE_VIEW.NODE_GREY,
    type: "input",
    id: 1,
    title: "Input Grey Node"
  },
  {
    name: "node_cast_2",
    nodeView: NODE_VIEW.NODE_SAFFRON,
    type: "default",
    id: 2,
    title: "Default Node"
  },
  {
    name: "node_cast_3",
    nodeView: NODE_VIEW.NODE_GREEN,
    type: "inputNode",
    id: 3,
    title: "Green Node"
  },
  {
    name: "node_cast_4",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "inputNode",
    id: 4,
    title: "Custom Input Node"
  },
  {
    name: "node_cast_5",
    nodeView: NODE_VIEW.DEFAULT_NODE,
    type: "input",
    id: 5,
    title: "Input Node"
  },
  {
    name: "node_cast_6",
    nodeView: NODE_VIEW.DIAMOND_YELLOW,
    type: "diamondNode",
    id: 6,
    title: "Diamond Yellow Node"
  },
  {
    name: "node_cast_7",
    nodeView: NODE_VIEW.DIAMOND_ORANGE,
    type: "diamondNode",
    id: 7,
    title: "Diamond Orange Node"
  },
  {
    name: "node_cast_8",
    nodeView: NODE_VIEW.DIAMOND_PINK,
    type: "diamondNode",
    id: 8,
    title: "Diamond Pink Node"
  }
];

export { NODE_VIEW, NEW_SCENES_NODE, SCENES_IN_CAST };
