import fs from 'fs';
import { ConsoleColors } from './consoleColors';
import { formatDate } from '../date';

/**
 * Log red error message to stdout and optionally log to a file
 * In case of logging to file, color will not be appended
 *
 * @function
 * @param {string} msg - Message to be logged to stdout
 * @param {?string} fileName - [Optional] Append log message to file <filename>
 */
export function errorLog(msg: string, fileName?: string): void {
  const now = new Date();
  const formattedMsg = `[${formatDate(now)}] ${msg}`;
  const coloredFormattedMsg = `${ConsoleColors.BG_RED}${ConsoleColors.FG_WHITE}${formattedMsg}${ConsoleColors.RESET}`;
  console.log(coloredFormattedMsg);
  if (fileName) fs.appendFileSync(fileName, formattedMsg + '\n');
}
