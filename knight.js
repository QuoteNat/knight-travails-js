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
    return this.map((left, index) => 
      left + vector[index]
  );
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

export function knightMoves(start, end) {
  if (!checkCoordinateBounds(start))
    throw new Error("start must be in range ([0-7],[0-7]");
  if (!checkCoordinateBounds(end))
    throw new Error("end must be in range ([0-7],[0-7]");

  // Using references, we can work back from the result of a breadth first search
  let queue = [new MoveNode(null, Vector.from(start))];
  let visited = new Set();
  visited.add(start);
  while (queue.length > 0 && queue[0].current !== Vector.from(end)) {
    let front = queue[0].current;
    console.log(front);
    console.log(visited.keys());

    for (const moveVector of knightMoveVectors) {
      let move = front.add(moveVector);
      // if in bounds and not already visited
      if (!visited.has(move) && checkCoordinateBounds(move)) {
        queue.push(new MoveNode(front, move));
        visited.add(move);
      }
    }
    queue.shift();
  }
  console.log(queue[0]);
}
