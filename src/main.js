import input from "input" 

const  userInput = await input.text("do you code");
const answer = "yes";

if (userInput == answer) {
    console.log("correct!");
} else {
    console.log("incorrect");
}

