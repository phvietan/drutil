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
    function sigintHandler() {
      const pid = proc.pid || 0;
      console.log(`Received SIGINT, killing process [pid=${pid} command=${command}]`);
      proc.kill('SIGINT');
    }
    process.on('SIGINT', sigintHandler);

    proc.on('close', () => {
      process.removeListener('SIGINT', sigintHandler);
      resolve();
    });
    proc.on('error', () => {
      process.removeListener('SIGINT', sigintHandler);
      resolve();
    });
  });
}
