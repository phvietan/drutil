import fs from 'fs';
import { formatDate } from '../date';

/**
 * Log message to stdout or optionally a file
 *
 * @param {string} msg - Message to be logged to stdout
 * @param {string} fileName - [Optional] Append log message to file <filename>
 * @param {boolean} toStdout - [Optional] Should print to stdout or not, default is true
 * @return {void}
 */
export function log(msg: string, fileName?: string, toStdout: boolean = true): void {
  const now = new Date();
  const formattedMsg = `[${formatDate(now)}] ${msg}`;
  if (toStdout) console.log(formattedMsg);
  if (fileName) fs.appendFileSync(fileName, formattedMsg + '\n');
}
