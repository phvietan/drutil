import fs from 'fs';
import { ConsoleColors } from './consoleColors';
import { formatDate } from '../date';

/**
 * Log green success message to stdout or optionally a file
 * In case of logging to file, color will not be appended
 *
 * @function
 * @param {string} msg - Message to be logged to stdout
 * @param {?string} fileName - [Optional] Append log message to file <filename>
 */
export function successLog(msg: string, fileName?: string): void {
  const now = new Date();
  const formattedMsg = `[${formatDate(now)}] ${msg}`;
  const coloredFormattedMsg = `${ConsoleColors.BG_GREEN}${ConsoleColors.FG_WHITE}${formattedMsg}${ConsoleColors.RESET}`;
  console.log(coloredFormattedMsg);
  if (fileName) fs.appendFileSync(fileName, formattedMsg + '\n');
}
