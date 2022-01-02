import fs from 'fs';
import {formatDate} from '../date';

/**
 * Log message to stdout or optionally a file
 * For example, to get writestream for second param:
 * @example
 * writeStream = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});)
 * log("Hello world", writeStream)
 *
 * @param {string} msg - Message to be logged to stdout
 * @param {fs.WriteStream} writeStream - [Optional] writeStream to log to file
 * @param {boolean} toStdout - [Optional] Should print to stdout or not, default is true
 * @return {void}
 */
export function log(msg: string, writeStream?: fs.WriteStream, toStdout: boolean = true): void {
  const now = new Date();
  const formattedMsg = `[${formatDate(now)}] ${msg}`;
  if (toStdout) console.log(formattedMsg);
  writeStream?.write(formattedMsg + '\n');
}
