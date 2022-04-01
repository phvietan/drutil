import fs from 'fs';
import { ConsoleColors } from './consoleColors';
import { formatDate } from '../date';

/**
 * Log yellow warning message to stdout or optionally a file
 * In case of logging to file, color will not be appended
 *
 * @function
 * @param {string} msg - Message to be logged to stdout
 * @param {?string} fileName - [Optional] Append log message to file <filename>
 */
export function warningLog(msg: string, fileName?: string): void {
  const now = new Date();
  const formattedMsg = `[${formatDate(now)}] ${msg}`;
  const coloredFormattedMsg = `${ConsoleColors.BG_YELLOW}${ConsoleColors.FG_BLACK}${formattedMsg}${ConsoleColors.RESET}`;
  console.log(coloredFormattedMsg);
  if (fileName) fs.appendFileSync(fileName, formattedMsg + '\n');
}
