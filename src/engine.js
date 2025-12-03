import readlineSync from 'readline-sync'

const roundsCount = 3

const runEngine = (userName, ruleDescription, generateRound) => {
  console.log(ruleDescription)

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = generateRound()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer.toLowerCase() !== answer.toLowerCase()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runEngine
