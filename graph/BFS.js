const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["A", "C", "D"]],
  ["C", ["A", "B", "D", "E"]],
  ["D", ["B", "C", "E", "F"]],
  ["E", ["C", "D"]],
  ["F", ["D"]]
]);

console.log(graph);

function BFS(graph, s) {
  let parent = new Map([[s, null]]), to_vist = [s], seen = new Set(s);

  while (to_vist.length > 0) {
    let u = to_vist.shift();
    let nodes = graph.get(u);

    nodes.forEach((vertex) => {
      if (!seen.has(vertex)) {
        to_vist.push(vertex);
        seen.add(vertex);
        parent.set(vertex, u);
      }
    });
  }

  return parent;
}

let result = BFS(graph, "E");
console.log(result);
