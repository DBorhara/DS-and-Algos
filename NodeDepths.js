function nodeDepths(root, prevDepth = 0) {
  if (!root) {
    return 0;
  }

  console.log('ROOT', root);

  console.log('Prev Depth', prevDepth);
  console.log('Node Depths left', nodeDepths(root.left, prevDepth + 1));
  console.log('Node Depths Right', nodeDepths(root.right, prevDepth + 1));
  return (
    prevDepth +
    nodeDepths(root.left, prevDepth + 1) +
    nodeDepths(root.right, prevDepth + 1)
  );
}

const tree = [
  { id: '1', left: '2', right: '3', value: 1 },
  { id: '2', left: '4', right: '5', value: 2 },
  { id: '3', left: '6', right: '7', value: 3 },
  { id: '4', left: '8', right: '9', value: 4 },
  { id: '5', left: null, right: null, value: 5 },
  { id: '6', left: null, right: null, value: 6 },
  { id: '7', left: null, right: null, value: 7 },
  { id: '8', left: null, right: null, value: 8 },
  { id: '9', left: null, right: null, value: 9 },
];
nodeDepths(tree);
// "tree": {
//   "nodes": [
//     {"id": "1", "left": "2", "right": "3", "value": 1},
//     {"id": "2", "left": "4", "right": "5", "value": 2},
//     {"id": "3", "left": "6", "right": "7", "value": 3},
//     {"id": "4", "left": "8", "right": "9", "value": 4},
//     {"id": "5", "left": null, "right": null, "value": 5},
//     {"id": "6", "left": null, "right": null, "value": 6},
//     {"id": "7", "left": null, "right": null, "value": 7},
//     {"id": "8", "left": null, "right": null, "value": 8},
//     {"id": "9", "left": null, "right": null, "value": 9}
//   ],
//   "root": "1"
// }
