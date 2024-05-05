#! /usr/bin/env node

// / this line is called a shebang, it tells the OS to run it with nodeJS

import { log } from 'console'
import inquirer from 'inquirer'

//declare a constant 'answers' and assign it to the result of inquirer

const answers:{
    Sentence: string
} = await inquirer.prompt([
    {
        name: 'Sentence',
        type: 'input',
        message: 'Enter your sentence to count the word:'
    }
])
const words = answers.Sentence.trim()

// print the array of word to the console
console.log(words)

//print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);