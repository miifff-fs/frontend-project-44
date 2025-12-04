#!/usr/bin/env node
import greetingUser from '../src/cli.js'
import runEngine from '../src/engine.js'
import { generateRound, ruleDescription } from '../src/games/calc.js'

const userName = greetingUser()
runEngine(userName, ruleDescription, generateRound)
