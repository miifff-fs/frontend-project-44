export const ruleDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1 // NOSONAR
  const answer = number % 2 === 0 ? 'yes' : 'no'
  return {
    question: String(number),
    answer }
}
