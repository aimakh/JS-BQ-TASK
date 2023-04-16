/* Q1 Task
Calculate the zakat value, first, create a variable named "zakatPercentage" and
store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
named "userInput" and take the input from the user using the prompt. Make sure
the input value is of a type number by converting the input string to a number
using a suitable method. Then, create a variable named "result" and assign its value
to the multiplication of the zakat percentage and user input. Finally, use an alert
message to display the calculated zakat value. The message should look like this:
"Your zakat value is xxx". */

let zakat_percent = 0.025;
let userInput = +prompt("Enter the value");

let result = zakat_percent  *  userInput;

alert("Your zakat value is " + result);

/* Q2 TASK
calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message. */

let familyMembers = +prompt("Enter the number of your family members");
let selectMethod = +prompt("Select the number of fitrah method:  1. wheat 2. raisins  3. dates   4. oats");
if (selectMethod === 1) {
     var w = 250 *familyMembers;
    alert("The fitrah amount is " + w);
}
else if ( selectMethod === 2) {
    var r = 2800 *familyMembers;
    alert("The fitrah amount is " + r);
}
else if ( selectMethod === 3) {
    var o = 2100 *familyMembers;
    alert("The fitrah amount is " + o);
}
else if ( selectMethod === 4) {
    var d = 450 *familyMembers;
    alert("The fitrah amount is " + d);
}
else {
    alert("You have to enter options that are given");
}

/* Q3 TASK 
Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again. */

let secretNumber = 8;
let userInput = +prompt("Guess the number.");
if (userInput == secretNumber){
    alert("Congratulations! You guessed the secret number.")
}
else if ( userInput < 8){
    alert("Your guess is too low");
}
else{
   alert("Guess again. ")
};

/* Q4 Task 
Create a program that asks the user to enter a name, and then prints out the name
with the first letter capitalized (Make your name in capitalized case). */

let enter = prompt("Enter your name");
let firstLetter = enter.slice(0,1).toUpperCase;
let capitalLetter = firstLetter + enter.slice(1);
console.log(capitalLetter);


/* Q5 Task 
In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.
Make sure to use descriptive variable names and comment on your code for clarity. */

let contactNames = [];
let contactNumbers = [];
let numberCount = prompt("How many you have to add the contacts?")
for (var i = 0; i < numberCount; i++) {
    let namContact = prompt("Enter your contact name");
    let numContact = prompt("Enter your contact number");
    contactNames.push(namContact);
    contactNumbers.push(numContact);
    console.log(contactNames[i] + ";" + contactNumbers[i]);
}

for (let i = 0; i < contactNumbers.length; i++) {
    console.log(contactNames[i] : contactNumbers[i]);
  }


/* Q6
Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining. */

let arr = ["Apple", "Banana", "Almonds", "Mango"];
let askUser = +prompt("Write the number of product which you want : 1. Apple , 2. Banana , 3. Almonds , 4.Mango")
let removedProducts = arr.splice (askUser -1 , 1)
// let removedProducts = arr.slice( id ,1)
console.log(removedProducts);
console.log("Remaining Products are : " + arr);
console.log("Remaining number of products are : " + arr.length);

/* Q7 
Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote. */


let yourNationality = prompt("Tell us your nationality ");
let yourGender = prompt("Tell us your gender ");
let yourAge = +prompt("Tell us your age. ");
if (yourNationality === "Pakistani" || yourNationality === "Indian"){
    if(yourGender === "male"&& yourAge >= 18 ){
        console.log("you are eligible to vote ");
    } else if (yourGender === "female" & yourAge >= 18){
        let married = prompt("Are you married? ");
        if (married === "yes"){
            console.log("you are eligible to vote.");
        } else {
           console.log("You are not eligible to vote.");
        }
        
    } 

} else {
    console.log("you are not eligible to vote");
}

/* Q8
You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array. */


let WorldCupSquad= ["Babar Azam", "Shaheen Afridi" , "Sarfaraz Ahmad", "Mohammad Haris", "Muhammad Hasnain", "Asif Ali", "Hasan Ali", "Shadab Khan" , "Fakhar Zaman", "Naseem Shah" , "Muhammad Rizwan", "Muhammad Waseem", "Imad Wasim", "Wahab Riaz", "Shoaib Malik"];
console.log(WorldCupSquad);
let finalTeam = WorldCupSquad.slice(0 , 11);
console.log(finalTeam);