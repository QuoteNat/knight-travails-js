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

export function knightPathFind(start, end) {
  start.map((coordinate) => {
    if (coordinate > 7 || coordinate < 0)
      throw new Error(
        "Path finding coordinates can not start outside of the bounds of a standard chessboard ([0-7],[0-7])"
      );
  });
  end.map((coordinate) => {
    if (coordinate > 7 || coordinate < 0)
      throw new Error(
        "Path finding coordinates can not end outside of the bounds of a standard chessboard ([0-7],[0-7])"
      );
  });
  let queue = [Vector.from(start)];
  while (queue.length > 0 && queue[0] !== end) {
    let front = queue[0];
  }
}
