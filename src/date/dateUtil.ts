/**
 * Reformat javascript Date to drutil convention
 * For example: Convert javascript Date to "26-12-2021 13:21"
 *
 * @function
 * @param {Date} time - Date object to convert
 * @return {string} - Drutil time convention
 */
export function formatDate(time: Date): string {
  const day = time.getDate();
  const month = time.getMonth()+1;
  const year = time.getFullYear();
  const hour = time.getHours();
  const minute = time.getMinutes();
  return `${day}-${month}-${year} ${hour}:${minute}`;
}

/**
 * Calculate the days difference between 2 Date object
 *
 * @function
 * @param {Date} a - Date object a
 * @param {Date} b - Date object b
 * @return {number} - A positive number of days difference between 2 Date object
 */
export function getNumDaysDifference(a: Date, b: Date): number {
  const between = Math.abs(Number(a) - Number(b));
  return Math.floor(between / 1000 / 3600 / 24);
}
