function saturdayFun(input="roller-skate"){
    return `This Saturday, I want to ${input}!`
}
function mondayWork(input="go to the office")  {
    return `This Monday, I will ${input}.`
} 
function wrapAdjective(input){
    const adjective = `special`;
    return function(){
        console.log(`You are ${adjective}`)
    }
}