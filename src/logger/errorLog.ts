import fs from 'fs';
import {COLORS} from './colors';
import {formatDate} from '../date';

/**
 * Log red error message to stdout or optionally a file
 * In case of logging to file, color will not be appended
 * For example, to get writestream for second param:
 * @example
 * writeStream = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});)
 * errorLog("This is error", writeStream)
 *
 * @param {string} msg - Message to be logged to stdout
 * @param {fs.WriteStream} writeStream - [Optional] writeStream to log to file
 * @return {void}
 */
export function errorLog(msg: string, writeStream?: fs.WriteStream): void {
  const now = new Date();
  const formattedMsg = `[${formatDate(now)}] ${msg}`;
  const coloredFormattedMsg = `${COLORS.BgRed}${COLORS.FgWhite}` + formattedMsg + COLORS.Reset;
  console.log(coloredFormattedMsg);
  writeStream?.write(formattedMsg + '\n');
}
