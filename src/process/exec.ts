import { spawn } from 'child_process';

export type ProcessResult = {
  stdout: string;
  stderr: string;
  err?: Error;
  code: number;
}

/**
 * Run new process as async with specified arguments, and return stdout, stderr, code
 * @param {string} command - Command string
 * @param {string[]} args - Arguments for command
 * @return {Promise<ProcessResult>} - Return result of { stdout, stderr, code }
 */
export async function exec(
  command: string,
  args: string[] = [],
): Promise<ProcessResult> {
  return new Promise<ProcessResult>((resolve) => {
    const proc = spawn(command, args);

    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (data) => stdout += data);
    proc.stderr.on('data', (data) => stderr += data);

    proc.on('close', (code) => {
      resolve({
        stdout,
        stderr,
        code: code || 0,
      });
    });
    proc.on('error', (err) => resolve({
      err,
      stdout,
      stderr,
      code: 0,
    }));
  });
}

/**
 * Run new process as async with string command only, and return stdout, stderr, code
 * @param {string} command - Command string
 * @return {Promise<ProcessResult>} - Return result of { stdout, stderr, code }
 * @example const result = await execStr("ls -la /");
 */
export async function execStr(command: string): Promise<ProcessResult> {
  const parsed = command.trim().split(' ');
  return exec(parsed[0], parsed.slice(1));
}

