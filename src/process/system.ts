import { spawn } from 'child_process';

/**
 * Run new process as async with specified arguments then show all outputs to stdout
 *
 * @function
 * @param {string} command - Command string
 * @param {string[]} args - Arguments for command [DEFAULT=[]]
 */
export async function system(
  command: string,
  args: string[] = [],
): Promise<void> {
  return new Promise<void>((resolve) => {
    const proc = spawn(command, args, { stdio: 'inherit' });
    proc.on('close', () => resolve());
    proc.on('error', () => resolve());
  });
}
