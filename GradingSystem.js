// prompt user to input student marks
let prompt = require("prompt-sync")({sigint: true});
let score = parseInt(prompt("please enter score? "))

let output;

if(score > 79 && score <=100){
    output = "A"
}else if(score >= 60 && score <=79){
    output = "B"
}else if(score >49 && score <=59){
    output = "C"
}else if(score >=40 && score <=49){
    output = "D"
}else if(score <40){
    output = "E"
}else{
    output = "invalid input"
}
 console.log(output)
