const $ = document

let calculateBtn = $.querySelector('.calculateBtn')
let userInput = $.querySelector('#dateInput')
userInput.max = new Date().toISOString().split('T')[0]

 calculateBtn.addEventListener('click' , calculateDate)

 function calculateDate(){

 }