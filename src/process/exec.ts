import { spawn } from 'child_process';

/**
 * A type for result of process exec
 *
 * @function
 * @param {string} stdout - the string of stdout after exec is finished
 * @param {string} stderr - the string of stderr after exec is finished
 * @param {Error?} err - error object if exec has error
 * @param {number} code - return status code after exec is finished
 */
export type ProcessResult = {
  stdout: string;
  stderr: string;
  err?: Error;
  code: number;
}

/**
 * Run new process as async with specified arguments, then return stdout, stderr, error and status code after finished
 *
 * @param {string} command - Command string
 * @param {string[]} args - Arguments for command [DEFAULT=[]]
 * @return {Promise<ProcessResult>} Result the exec
 */
export async function exec(
  command: string,
  args: string[] = [],
): Promise<ProcessResult> {
  return new Promise<ProcessResult>((resolve) => {
    const proc = spawn(command, args);
    function sigintHandler() {
      const pid = proc.pid || 0;
      console.log(`Received SIGINT, killing process [pid=${pid} command=${command}]`);
      proc.kill('SIGINT');
    }
    process.on('SIGINT', sigintHandler);

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => stdout += data);
    proc.stderr.on('data', (data) => stderr += data);

    proc.on('close', (code) => {
      process.removeListener('SIGINT', sigintHandler);
      resolve({
        stdout,
        stderr,
        code: code || 0,
      });
    });
    proc.on('error', (err) => {
      process.removeListener('SIGINT', sigintHandler);
      resolve({
        err,
        stdout,
        stderr,
        code: 0,
      });
    });
  });
}
