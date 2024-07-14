const $ = document

let calculateBtn = $.querySelector('.calculateBtn')
let userInput = $.querySelector('#dateInput')
userInput.max = new Date().toISOString().split('T')[0]

 calculateBtn.addEventListener('click' , calculateDate)

 function calculateDate(){
    let userInputDate = new Date(userInput.value)

    let userInputDay = userInputDate.getDate()
    let userInputMonth = userInputDate.getMonth() + 1
    let userInputYear = userInputDate.getFullYear()

    let nowDate = new Date()

    let nowDay = nowDate.getDate()
    let nowMonth = nowDate.getMonth() + 1
    let nowYear = nowDate.getFullYear()

    let resultDay , resultMonth , resultYear;

    resultYear = nowYear - userInputYear

    if(nowMonth >= userInputMonth){
        resultMonth = nowMonth - userInputMonth
    }else{
        resultYear--;
        resultMonth = 12 + nowMonth - userInputMonth
    }

    if(nowDay >= userInputDay){
        resultDay = nowDay - userInputDay
    }else{
        
    }
 }