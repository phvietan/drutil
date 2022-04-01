/**
 * Get a random number between the range of [left, right]
 *
 * @function
 * @param {number} left - Left boundary of numbers
 * @param {number} right - Right boundary of numbers
 * @return {number} - A random number between left and right
 */
export function getRandomBetween(left: number, right: number): number {
  const mx = Math.max(left, right);
  const mn = Math.min(left, right);
  const range = mx - mn + 1;
  return Math.floor(Math.random() * range + mn);
}
