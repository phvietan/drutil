import fs from 'fs';
import {COLORS} from './colors';
import {formatDate} from '../date';

/**
 * Log yellow warning message to stdout or optionally a file
 * In case of logging to file, color will not be appended
 *
 * @param {string} msg - Message to be logged to stdout
 * @param {string} fileName - [Optional] Append log message to file <filename>
 * @return {void}
 */
export function warningLog(msg: string, fileName?: string): void {
  const now = new Date();
  const formattedMsg = `[${formatDate(now)}] ${msg}`;
  const coloredFormattedMsg = `${COLORS.BgYellow}${COLORS.FgBlack}` + formattedMsg + COLORS.Reset;
  console.log(coloredFormattedMsg);
  if (fileName) fs.appendFileSync(fileName, formattedMsg + '\n');
}
