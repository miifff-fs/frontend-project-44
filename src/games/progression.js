export const ruleDescription = 'What number is missing in the progression?'

const makeProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const hideElement = (progression, hiddenIndex) => {
  return progression.map((num, i) => (i === hiddenIndex ? '..' : num))
}

export const generateRound = () => {
  const start = Math.floor(Math.random() * 20) + 1 // NOSONAR
  const step = Math.floor(Math.random() * 9) + 2 // NOSONAR
  const length = 10

  const progression = makeProgression(start, step, length)
  const hiddenIndex = Math.floor(Math.random() * length) // NOSONAR
  const hiddenProgression = hideElement(progression, hiddenIndex)
  const answer = progression[hiddenIndex]

  return {
    question: hiddenProgression.join(' '),
    answer: String(answer),
  }
}
