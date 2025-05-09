import { knightMoves } from "./knight.js";

function printPath(path) {
  console.log(
    `The knight made it in ${path.length - 1} moves! Here is the path:`
  );
  for (const coord of path) {
    console.log(JSON.stringify(coord));
  }
}

let path = knightMoves([0, 0], [3, 3]);
console.log("Path from [0,0] to [3,3]");
printPath(path);
path = knightMoves([0, 0], [7, 7]);
console.log("Path from [0,0] to [7,7]");
printPath(path);
