import inquirer from "inquirer";
const Random_Number = Math.floor(Math.random() * 5 + 1);
const Answer = await inquirer.prompt([{
        name: "User_Guessed_Number",
        type: "number",
        message: "PLease Guess a Number Between 1 to 5 = ",
    }]);
if (Answer.User_Guessed_Number === Random_Number) {
    console.log("Congratulations...!!! You Guessed The Right Number");
}
else {
    console.log("Opps...!!! You Guessed The Wrong Number");
}
console.log(`The Correct Number is : ${Random_Number}`);
