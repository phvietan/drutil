import { spawn } from 'child_process';

/**
 * Run new process as async with specified arguments and output to stdout
 * @param {string} command - Command string
 * @param {string[]} args - Arguments for command
 */
export async function system(
  command: string,
  args: string[] = [],
): Promise<void> {
  return new Promise<void>((resolve) => {
    const proc = spawn(command, args);

    proc.stdout.on('data', (data) => console.log(data.toString()));
    proc.stderr.on('data', (data) => console.log(data.toString()));

    proc.on('close', () => resolve());
    proc.on('error', () => resolve());
  });
}

/**
 * Run new process as async with string command only
 * @param {string} command - Command string
 * @example await systemStr("ls -la /");
 */
export async function systemStr(command: string): Promise<void> {
  const parsed = command.trim().split(' ');
  return system(parsed[0], parsed.slice(1));
}

