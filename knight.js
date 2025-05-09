/**
 * Helper class for doing vector math with arrays.
 */
class Vector extends Array {
  /**
   * Adds a vector to another vector
   * @param {Array} vector Vector to be added.
   * @returns The sum of the two vectors.
   */
  add(vector) {
    return this.map((left, index) => {
      if (index >= vector.length) return left;
      left + vector[index];
    });
  }
}

function checkCoordinateBounds(vector2) {
  for (const value in vector2) {
    if (value > 7 || value < 0) return false;
  }
  return true;
}

export function knightPathFind(start, end) {
  if (!checkCoordinateBounds(start))
    throw new Error("start must be in range ([0-7],[0-7]");
  if (!checkCoordinateBounds(end))
    throw new Error("end must be in range ([0-7],[0-7]");

  let queue = [Vector.from(start)];
  while (queue.length > 0 && queue[0] !== end) {
    let front = queue[0];
  }
}
