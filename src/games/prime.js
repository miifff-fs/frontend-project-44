export const ruleDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  const limit = Math.sqrt(n)
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false
  }
  return true
}

export const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1 // NOSONAR
  const answer = isPrime(number) ? 'yes' : 'no'

  return {
    question: String(number),
    answer,
  }
}
