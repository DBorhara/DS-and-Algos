// Edge List
const graphEdge = [
  // Each one is a edge connection from node a to be [a,b]
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacency List
const graphAdj = [
  // Each index represents the node value and the array elements contain the connected nodes by edges, Can be done with objects to assign keys and values instead of index and values.
  [2],
  [2, 3],
  [0, 1, 3],
  [1, 2],
];

// Adjacency Matrix
//As Arr
const graphAdjMatArr = [
  [0, 0, 1, 0], // Value = Index so 0, and index in subarray is the connection 2. 0 is connected to 2 and not itself(0), 1, or 3
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
// As Object
const graphAdjMatObj = {
  0: [0, 0, 1, 0], // Key is the value and the corresponding index is the connection 0 is connected to 2
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
