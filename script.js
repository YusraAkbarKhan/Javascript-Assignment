// Chapter 1 (Alert Box)
// Alert Q1 
function greeting() {
    alert("Hello there how are you?");
}

// Alert Q2
function password() {
    alert("Error! Please enter a valid password");
}

// Alert Q3
function lineBreak() {
    alert("Welcome to Js land..... \n Happy Coding!");
}

// Alert Q4
function sequence() {
    alert("Welcome to Js land.....");
    alert("Happy Coding!");
}



// Chapter 2 (Variables For Strings)
// VarString Q1
var username;

// VarString Q2
var myName = "Yusra Akbar Khan";

// VarString Q3
var message = "Hello World";
function varString_Q3() {
    alert(message);
}

// VarString Q4
let firstname = "Mark Ben",
    age = "20 Years Old",
    text = "Certified Mobile Application Development";

function bioData() {
    alert(firstname);
    alert(age);
    alert(text);
}

// VarString Q5
var pizza = "PIZZA \n PIZZ \n PIZ \n PI \n P";

function pizzaVar() {
    alert(pizza);
}

// VarString Q6
var email = "yusraakbarkhan@gmail.com";

function myEmail() {
    alert("My eamil address is " + email);
}

// VarString Q7
var book = " “A smarter way to learn JavaScript” ";

function learnBook() {
    alert("I am trying to learn from the book" + book);
}

// VarString Q8
function htmlContent() {
    document.write("Yah! I can write HTML content throungh JS");
}

// VarString Q9
var symbol = " “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ";

function symbols() {
    alert(symbol);
    document.write(symbol);
}




// Chapter 3 (Variables For Numbers)
// VarNum Q1
var ageNum = 22;

function $age() {
    alert("I am " + ageNum + " years old");
}

// VarNum Q2
var n = 15;

function visitNum() {
    alert("You've visited this site " + n + " times");
}

// VarNum Q3
var birthYear = 2000;

function birth() {
    document.write("My birth year is " + birthYear + "<br> Data type of my declared variable is number")
}

// VarNum Q4
var visitorName = "<b> Kelly Gomez </b>";
var product_title = "<b> T-shirts </b>";
var quantity = 56;

function clothing_store() {
    document.write(visitorName + " ordered " + quantity + product_title + " on Khan Clothing Store")
}




// Chapter 4 (VARIABLE NAMES: Legal & Illegal)
// Q1
var first, second, third;

// Q2
// (The legal variables)
var _33new;
var New_Name;
var newName;
var _name$;
var _$;

function declared() {
    alert("Declared in JS file");
}

// (The illegal Variables)
// var $name;
// var 5name;
// var new product;
// var myName%;
// var product-Title;


// Q3
var heading = "Rules for naming JS variables";

function fill_in_blanks() {
    document.write(heading.bold() + "<br> Variables names can only contain letters, numbers, $ and _.For example: $my_1stVariable" + "<br> Variables must start with a letter, $ and _." + "Variables names are case sensitive" + "Variable names should not be JS")
}


// Chapter 5 (MATH EXPRESSIONS)
// Q1
var a = 4;
var b = 6;
var sum = (a + b);

function sumResult() {
    document.write("Sum of 4 and 6 is" + sum);
}

// Q2
var substract = (a - b);
var multiply = (a * b);
var divide = (a / b);
var modulus = (a % b);

function Result() {
    document.write("Substraction of 4 and 6 is " + substract);
    document.write("<br> Product of 4 and 6 is " + multiply);
    document.write("<br> Division of 4 and 6 is " + divide);
    document.write("<br> Modulus of 4 and 6 is " + modulus);
}

// Q3
function mathematics() {
    var anyNum;
    document.write("Value after variable declaration is: " + anyNum);

    anyNum = 5;
    document.write("<br>Initail value: " + anyNum);

    anyNum++;
    document.write("<br>Value after increment is: " + anyNum);

    anyNum += 7;
    document.write("<br>Value after addition is: " + anyNum);

    anyNum--;
    document.write("<br>Value after decrement is: " + anyNum);

    document.write("<br>Remainder is: " + (anyNum % 3));
}

// Q4
function ticketsPrice() {
    var cost_of_1 = 600;
    var cost_of_5 = (cost_of_1 * 5) + "PKR";
    document.write("The total cost to buy 5 tickets to a movie is " + cost_of_5)
}

// Q5
function table() {
    var five = 5;
    document.write(five + " x 1 = " + (five * 1));
    document.write("<br>" + five + " x 2 = " + (five * 2));
    document.write("<br>" + five + " x 3 = " + (five * 3));
    document.write("<br>" + five + " x 4 = " + (five * 4));
    document.write("<br>" + five + " x 5 = " + (five * 5));
    document.write("<br>" + five + " x 6 = " + (five * 6));
    document.write("<br>" + five + " x 7 = " + (five * 7));
    document.write("<br>" + five + " x 8 = " + (five * 8));
    document.write("<br>" + five + " x 9 = " + (five * 9));
    document.write("<br>" + five + " x 10 = " + (five * 10));
}

// Q6
function temperatureConverter() {
    var celsius = 25;
    var c_to_f = (celsius * 1.8) + 32;
    document.write(celsius + "<b>C</b>" + " is " + c_to_f + "<b> F </b>");

    var fahrenheit = 70;
    var f_to_c = (fahrenheit - 32) * 5 / 9;
    document.write("<br>" + fahrenheit + "<b>F</b>" + " is " + f_to_c + "<b> C </b>");
}

// Q7
function storeReceipt() {
    var item1 = 650;
    var quantity1 = 3;
    var item2 = 100;
    var quantity2 = 7;
    var shipping = 100;
    document.write("<h1> Shopping Cart </h1>")
    document.write("<br> Price of item 1 is " + item1);
    document.write("<br> Quantity of item 1 is " + quantity1);
    document.write("<br> Price of item 2 is " + item2);
    document.write("<br> Quantity of item 2 is " + quantity2);
    document.write("<br><br> Total cost of your order is " + (item1 * quantity1 + item2 * quantity2 + shipping));
}

// Q8
function student_Percentage() {
    var totalMarks = 980;
    var obtainedMarks = 950;
    var percentage = obtainedMarks * 100 / totalMarks;
    document.write("Total Marks: " + totalMarks + "<br> Obtained Marks: " + obtainedMarks)
    document.write("<br><br><b> Percentage: </b>" + percentage + "%")
}

// Q9
function currency() {
    var one$US = 104.80;
    var one$Riyal = 28;
    var PKR = one$US * 10 + one$Riyal * 25;
    document.write("<h1> Currency in PKR </h1>" + "<br> Total currency in PKR is: " + PKR);
}

// Q10
function arithmetic() {
    var initail = 5;
    var cal = (initail + 5 * 10) / 2;
    alert(cal);
}

// Q11
function ageCalculator() {
    var birthYear = prompt("What's your birth year?");
    var now = new Date();
    var currentYear = now.getFullYear();
    alert("Your age is " + (currentYear - birthYear));
}

// Q12
function circle() {
    var radius = 20;
    var circumference = 2 * 3.142 * 20;
    var area = 3.142 * 20 * 20;
    document.write("<h1> The Geometrizer </h1>" + "<br> Radius of a circle: " + radius + "<br>The Circumference is: " + circumference + "<br> The area is: " + area);
}

// Q13
function supplyCalculator() {
    var fav_snak = "chocolate";
    var currentAge = 22;
    var maxAge = 60;
    var perDay = 4;
    var lifeTime = (maxAge - currentAge) * (365 * 4);
    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("<br>Favourite Snack: " + fav_snak);
    document.write("<br> Current age: " + currentAge);
    document.write("<br> Estimated Maximum age: " + maxAge);
    document.write("<br>Amount of snack per day: " + perDay);
    document.write("<br><br> You will need " + lifeTime + " " + fav_snak + " to last you until the ripe old age of " + maxAge)
}

// Chapter 6-9
// Q1
function updating() {
    var abc = 10;
    document.write("Result: <br> The value of abc is: " + abc);
    ++abc;
    document.write("<br><br> The value of ++abc is: 11 <br> Now value of abc is: " + abc);
    abc++;
    document.write("<br><br> The value of abc++ is: 11 <br> Now the value of abc is: " + abc);
    --abc;
    document.write("<br><br> The value of --abc is: 11 <br> Now the value of abc is: " + abc);
    abc--;
    document.write("<br><br> The value of --abc is: 11 <br> Now the value of abc is: " + abc);
}

// Q2 
function findingOutput() {
    var ac = 2, bc = 1;
    let result = --ac - --bc + ++bc + bc--;
    document.write("ac is: " + ac + "<br> bc is: " + bc + "<br> result is: " + result)
}

// Q3
function greetUser(){
    const greet = prompt("Enter your name:");
    var pas = greet.toUpperCase();
    alert("Hello " + pas);
}

// Q5
function userTable(){
    const table = prompt("Enter a number:", 5 );
    for (j = 1; j <= 10; ++j){
        document.write(table + " x " + j + " = " + (table*j) + "<br><br>");
    }
}

// Q6
function generateTable() {
    let subject1 = prompt("Write first subject name." , "Eng"),
        subject2 = prompt("Write second subject name." , "Urdu"),
        subject3 = prompt("Write third subject name." , "Math");
    const totalM = 100;
    let mark1 = prompt("Give your obtained marks in " + subject1 , 50),
        mark2 = prompt("Give your obtained marks in " + subject2, 50),
        mark3 = prompt("Give your obtained marks in " + subject3, 50);
    var finalmark = Number(mark1) + Number(mark2) + Number(mark3);
    let finalPercentage = finalmark / 300 * 100 + "%";

    const tableHtml = `
                <table>
                    <tr>
                        <th>Subject</th>
                        <th>Total Marks</th>
                        <th>Obtained Marks</th>
                        <th>Percentage</th>
                    </tr>
                    <tr>
                        <td>${subject1}</td>
                        <td>${totalM}</td>
                        <td>${mark1}</td>
                        <td>${(mark1 / totalM) * totalM + "%"}</td>
                        
                    </tr>
                    <tr>
                        <td>${subject2}</td>
                        <td>${totalM}</td>
                        <td>${mark2}</td>
                        <td>${(mark2 / totalM) * totalM + "%"}</td>
                    </tr>
                    <tr>
                        <td>${subject3}</td>
                        <td>${totalM}</td>
                        <td>${mark3}</td>
                        <td>${(mark3 / totalM) * totalM + "%"}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>300</td>
                        <td>${finalmark}</td>
                        <td>${finalPercentage}</td>
                    </tr>
                </table>
    `

    document.write(tableHtml);
}

// chapter 9-11
// Q1
function city(){
    var z = prompt("Enter your city name here:");
    let city = z.toLowerCase();
        if(z === "karachi"){
            alert("Welcome to the city of lights");
        }
        else if(z === "lahore"){
            alert("Lahore Lahore hai!!");
        }
        else{
            alert("Welcome");
        }
}

// Q2
function selectGender(){
    var gen = prompt("What's your gender?");
    let gender = gen.toLowerCase();
    if(gender === "male"){
        alert("Good Morning Sir");
    }
    else if(gender === "female"){
        alert("Good Morning Ma'am");
    }
    // else{
    //     alert("Good Morning");
    // }
}

// Q3
function color(){
    var color = prompt("Choose one of the signal colors: (Red , Yellow , Green)");
    let changeColor = color.toLowerCase();
    if(changeColor === "red"){
        alert("Must Stop");
    }
    else if(changeColor === "yellow"){
        alert("Ready to go");
    }
    else if(changeColor === "green"){
        alert("Move Now");
    }
    else{
        alert("Choose any signal color");
    }
}

// Q4
function fuel(){
    var remainingFuel = prompt("How many litres of fuel is remaining in the car?", 1);
    var fRemained = Number(remainingFuel);
    if(fRemained < 0.25){
        alert("“Please refill the fuel in your car”");
    }
}

// Q5


// Q6
function markSheet(){
    var sub1 = prompt("Write your obtained marks in Maths: ");
    var sub2 = prompt("Write your obtained marks in Eng: ");
    var sub3 = prompt("Write your obtained marks in Science: ");
    var obtained = Number(sub1) + Number(sub2) + Number(sub3);
    var t_marks = prompt("Write the total marks");
    var $percentage = obtained / t_marks *100;
    if ($percentage >= 80){
        var grade = "A-one";
        var remarks = "Excellence";
    }
    else if ($percentage >= 70){
        grade = "A";
        remarks = "Good";
    }
    else if ($percentage >= 60){
        grade = "B";
        remarks = "You need to improve";
    }
    else if ($percentage < 60){
        grade = "fail";
        remarks = "Sorry";
    }

    document.write("<h1>Marks Sheet</h1>" + "<br>" + "Total Marks: " + t_marks + "<br>" +"<br>" + "Obtained Marks: " + obtained + "<br><br>" + "Percentage: " + $percentage + "%" + "<br><br>" + "Grade: " + grade + "<br><br>" + "Reamrks: " + remarks)
 
}




// Chapter 12 - 13 (IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION)
// Q1

function letterCase() {
    var char = prompt("Enter something");
    const charCode = char.charCodeAt(0);
    if (char.length > 1) {
        alert("String should consists of one character at max.");
        return
    }
    if (charCode >= 65 && charCode <= 90) {
        alert("Uppercase");
    }
    else if (charCode >= 97 && charCode <= 122) {
        alert("Lowercase");
    }
    else if (charCode >= 48 && charCode <= 57) {
        alert("Number");
    }
    else {
        alert("Symbol");
    }
}

