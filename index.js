
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
} 
    saturdayFun()


function mondayWork(plan = "go to the office"){
    return `This Monday, I will ${plan}.`
    
}
    mondayWork()


function wrapAdjective(charity = '*'){
    return function (adjective = 'special'){
    return`You are ${charity}${adjective}${charity}!`;}
}


    wrapAdjective()


