/**
 * The program is the classic
 * factorial program
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2020-11-13
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()
/**
 *
 * This is the factorial function.
 *
 * @param {number} userNumber the user input.
 * @returns {number} the factorial of the number.
 */
function factorial(userNumber: number): number {
  if (userNumber < 0) {
    return -1
  } else if (userNumber === 0) {
    return 1
  } else {
    return factorial(userNumber - 1) * userNumber
  }
}

// Asks for the users input
console.log('This program factorials a Number!')
const userNum = prompt('Enter your word: ')
const userNumber = parseInt(userNum)

if (!isNaN(userNumber)) {
  // Shows the original number
  console.log(`This is the Original Number: ${userNumber}`)
  // Shows the factorial of the number
  console.log(`The factorial is: ${factorial(Number(userNumber))}`)
} else {
  // Shows if the number is invalid
  console.log('Invalid Input!')
}
console.log('\nDone.')
