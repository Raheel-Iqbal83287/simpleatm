#! /usr/bin/env node
import inquirer from "inquirer";
let accBalance = 10000;
let operation;
let withdrawAmount;
let depositAmount;
let pin = 1234;
let answerPin = await inquirer.prompt({
    name: "pinquestion",
    type: "number",
    message: "Please enter your pin : ",
});
if (answerPin.pinquestion === pin) {
    //Asking about which transaction to make.
    operation = await inquirer.prompt({
        name: "tranasction",
        type: "list",
        choices: ["Cash Withdrawal", "Cash Deposit", "Balance Check"],
    });
    //Checking transction type
    // Cash Withdrawal Operation
    if (operation.tranasction === "Cash Withdrawal") {
        withdrawAmount = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter amount to withdraw : ",
        });
        if (withdrawAmount.amount > accBalance) {
            console.log(`Available Balance : ${accBalance}`);
            console.log(`You cannot withdraw more than account balance : ${withdrawAmount.amount}`);
        }
        else if (withdrawAmount.amount <= accBalance) {
            console.log(`Amount withdrawn : ${withdrawAmount.amount}`);
            accBalance -= withdrawAmount.amount;
            console.log(`Account Balance : ${accBalance}`);
        }
    }
    // Cash Deposit Operation
    else if (operation.tranasction === "Cash Deposit") {
        depositAmount = await inquirer.prompt({
            name: "deposit",
            type: "number",
            message: "Please enter amount to deposit : ",
        });
        if (depositAmount.deposit > 0) {
            accBalance += depositAmount.deposit;
            console.log(`Amount deposited : ${depositAmount.deposit}`);
            console.log(`Account Balance : ${accBalance}`);
        }
        else if (depositAmount.deposit <= 0) {
            console.log("Amount cannot be 0 or less than 0");
        }
    }
    //Balance Check Operation
    else if (operation.tranasction === "Balance Check") {
        console.log(`Account Balance : ${accBalance}`);
    }
}
else if (answerPin.pinquestion !== pin) {
    console.log("Incorrect Pin!");
}
