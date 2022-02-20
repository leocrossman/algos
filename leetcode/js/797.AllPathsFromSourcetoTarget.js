/*
Given a directed acyclic graph (DAG) of n currs labeled from 0 to n - 1, find all possible paths from curr 0 to curr n - 1 and return them in any order.
The graph is given as follows: graph[i] is a list of all currs you can visit from curr i (i.e., there is a directed edge from curr i to curr graph[i][j]).
*/
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const n = graph.length - 1;
  const paths = [];
  const backtrack = (path, nodes) => {
    if (path[path.length - 1] === n) {
      paths.push(path);
      return;
    }
    for (let i = 0; i < nodes.length; i++) {
      const nextNode = nodes[i];
      backtrack([...path, nextNode], graph[nextNode]);
    }
  };
  backtrack([0], graph[0]); // initialize all possible paths to [0] and pass in starting neighbors
  return paths;
};
