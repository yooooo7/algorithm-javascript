const graph = new Map([
  ["A", ["B", "C"]],
  ["B", ["A", "C", "D"]],
  ["C", ["A", "B", "D", "E"]],
  ["D", ["B", "C", "E", "F"]],
  ["E", ["C", "D"]],
  ["F", ["D"]]
]);

console.log(graph);

function DFS(graph, s) {
  let visited = [], to_vist = [s], seen = new Set(s);

  while (to_vist.length > 0) {
    let u = to_vist.pop();
    let nodes = graph.get(u);

    nodes.forEach((vertex) => {
      if (!seen.has(vertex)) {
        to_vist.push(vertex);
        seen.add(vertex);
      }
    });
    visited.push(u);
  }

  return visited;
}

let result = DFS(graph, "E");
console.log(result);
