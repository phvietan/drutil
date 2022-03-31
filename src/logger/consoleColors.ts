/**
 * Enum for constants of network drutil utilities
 *
 * @enum {string} ConsoleColors
 * @property RESET - Reset current color to default
 * @property FG_BLACK - Set current color to have foreground black
 * @property FG_WHITE - Set current color to have foreground white
 * @property BG_RED - Set current color to have background red
 * @property BG_GREEN - Set current color to have background green
 * @property BG_YELLOW - Set current color to have background yellow
 */
export enum ConsoleColors {
  RESET = '\x1b[0m',
  FG_BLACK = '\x1b[30m',
  FG_WHITE = '\x1b[37m',
  BG_RED = '\x1b[41m',
  BG_GREEN = '\x1b[42m',
  BG_YELLOW = '\x1b[43m',
}
