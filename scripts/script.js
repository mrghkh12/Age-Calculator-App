const $ = document

let userInput = $.querySelector('#dateInput')
userInput.max = new Date().toISOString().split('T')[0]