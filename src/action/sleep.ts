/**
 * Sleep function in miliseconds
 * @param {number} ms - Number of miliseconds to sleep
 * @return {void}
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
