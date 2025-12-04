export const ruleDescription = 'Find the greatest common divisor of given numbers.'

const gcd = (number1, number2) => {
  if (number2 === 0) return number1
  return gcd(number2, number1 % number2)
}

export const generateRound = () => {
  const number1 = Math.floor(Math.random() * 100) + 1 // NOSONAR
  const number2 = Math.floor(Math.random() * 100) + 1 // NOSONAR

  const result = gcd(number1, number2)
  return {
    question: `${number1} ${number2}`,
    answer: String(result) }
}
