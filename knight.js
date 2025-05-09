/**
 * Helper class for doing vector math with arrays.
 * Modified from https://stackoverflow.com/a/67804085
 */
class Vector extends Array {
  /**
   * Adds a vector to another vector
   * @param {Array} vector Vector to be added.
   * @returns The sum of the two vectors.
   */
  add(vector) {
    return this.map((left, index) => left + vector[index]);
  }
}

function checkCoordinateBounds(vector2) {
  for (const value of vector2) {
    if (value > 7 || value < 0) return false;
  }
  return true;
}

// Possible moves for a knight piece
const knightMoveVectors = [
  [2, 1],
  [1, 2],
  [-2, 1],
  [-1, 2],
  [-2, -1],
  [-1, -2],
  [2, -1],
  [1, -2],
];

class MoveNode {
  previous = null;
  current = null;
  constructor(previous = null, current = null) {
    this.previous = previous;
    this.current = current;
  }
}

function compareArrays(array1, array2) {
  if (array1.length != array2.length) return false;
  for (const index in array1) {
    if (array1[index] !== array2[index]) return false;
  }
  return true;
}

export function knightMoves(start, end) {
  if (!checkCoordinateBounds(start))
    throw new Error("start must be in range ([0-7],[0-7]");
  if (!checkCoordinateBounds(end))
    throw new Error("end must be in range ([0-7],[0-7]");

  // Using references, we can work back from the result of a breadth first search
  let queue = [new MoveNode(null, Vector.from(start))];
  let visited = [];
  visited.push(start);
  while (queue.length > 0 && !compareArrays(queue[0].current, end)) {
    let front = queue[0].current;
    console.log(front);
    console.log(visited.keys());

    for (const moveVector of knightMoveVectors) {
      let move = front.add(moveVector);
      // if in bounds and not already visited
      if (checkCoordinateBounds(move)) {
        let unvisited = true;
        for (const coord of visited) {
          if (compareArrays(coord, move)) {
            unvisited = false;
            break;
          }
        }
        if (unvisited) {
          queue.push(new MoveNode(front, move));
          visited.push(move);
        }
      }
    }
    queue.shift();
  }
  console.log(queue);
}
