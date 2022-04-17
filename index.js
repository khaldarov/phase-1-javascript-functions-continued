// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
//
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
//
function wrapAdjective(highlight = "*") {
    const innerFnc = (innerParam = "special") => {
        return `You are ${highlight}${innerParam}${highlight}!`
    }
    return innerFnc
}
console.log(wrapAdjective("||")("a dedicated programmer"))
console.log(wrapAdjective()())