export const ruleDescription = 'What is the result of the expression?'

export const generateRound = () => {
  const operators = ['+', '-', '*']
  const operator = operators[Math.floor(Math.random() * 3)] // NOSONAR
  let number1 = Math.floor(Math.random() * 100) + 1
  let number2 = Math.floor(Math.random() * 100) + 1

  const question = `${number1} ${operator} ${number2}`
  let result
  if (operator === '+') {
    result = number1 + number2
  }
  else if (operator === '-') {
    result = number1 - number2
  }
  else {
    result = number1 * number2
  }
  return {
    question,
    answer: String(result) }
}
