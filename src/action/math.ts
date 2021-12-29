/**
 * Get a random number between 2 numbers [left, right]
 * @param {number} left - Left boundary number
 * @param {number} right - Right boundary number
 * @return {number} - A random number between left and right
 */
export function getRandomBetween(left: number, right: number): number {
  const mx = Math.max(left, right);
  const mn = Math.min(left, right);
  const range = mx - mn + 1;
  return Math.floor(Math.random() * range + mn);
}
