/**
 * Check if param is array or not
 * @param {any} value - Param to check if it is array
 * @return {boolean} - True if param is array
 */
export function isArray(value: any): boolean {
  return Array.isArray(value);
}

/**
 * Check if param is number or not
 * @param {any} value - Param to check if it is number
 * @return {boolean} - True if param is number
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

/**
 * Check if param is string or not
 * @param {any} value - Param to check if it is string
 * @return {boolean} - True if param is string
 */
export function isString(value: any): boolean {
  return typeof value === 'string';
}

/**
 * Check if param is json object or not
 * @param {any} value - Param to check if it is object
 * @return {boolean} - True if param is object
 */
export function isObject(value: any): boolean {
  if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
