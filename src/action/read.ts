import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Ask user and get user's input from stdin
 *
 * @function
 * @param {?string} inputQuestion - Optional question to be appeared before promt user's input
 * @return {Promise<string>} User's answer as string
 */
export async function read(inputQuestion?: string): Promise<string> {
  return new Promise<string>((resolve) => {
    const question = inputQuestion ? inputQuestion.trim() + '\n> ' : '> ';
    rl.question(question, (answer) => resolve(answer));
  });
}

/**
 * Ask user to choose between choices and get user's input from stdin
 *
 * @param {string} question - Question to be appeared before promt user's input
 * @param {string[]} choices - Choices for user to choose
 * @return {Promise<string>} User's answer as string
 */
export async function readAndChoose(question: string, choices: string[]): Promise<string> {
  const questionsWithChoices =
    `${question} [choose in range 1-${choices.length}]:\n` +
    choices.reduce((acc, answer, index) => `${acc}${index + 1}. ${answer}\n`, '');

  const ans = +(await read(questionsWithChoices));
  return choices[ans - 1];
}
