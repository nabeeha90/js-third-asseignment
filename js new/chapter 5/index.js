//1.
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");

// Question 2
document.write("Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + (num1 / num2) + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2) + "<br><br>");

// 3.

var number;
document.write("Value after variable declaration is: " + "??" + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after adding seven is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder + "<br><br>");

//4.
var ticketprice = 600;
var totalcost = ticketprice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalcost + " PKR");

5.
var num = 4;

document.write("<br><br>" + "Table of " + num + "<br><br>");

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br>");

6.
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write("<br><br>" + celsius + "°C is " + fahrenheit + "°F");
document.write("<br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5 / 9;

document.write(fahrenheit + "°F is " + celsius + "°C");

7.
var priceItem1 = 650;
var priceItem2 = 100;

var quantityItem1 = 3;
var quantityItem2 = 7;

var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) +
                (priceItem2 * quantityItem2) +
                shippingCharges;

document.write("<h1>Shopping Cart</h1>");

document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 ordered is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 ordered is " + quantityItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");

document.write("Total cost of your order is " + totalCost);

8.
var totalMarks = 980;
var obtainedMarks = 804;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1><br>");

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%");


9.
var usDollar = 10;
var saudiRiyal = 25;

var totalPKR = (usDollar * 104.80) + (saudiRiyal * 28);

document.write("<h1>Currency in PKR</h1><br>");
document.write("Total Currency in PKR: " + totalPKR);

10.
var num = 10;

var result = (num + 5) * 10 / 2;

document.write("<h2>Question 10</h2>");
document.write("Result = " + result);


var currentYear = 2016;
var birthYear = 1992;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age2 + " or " + age1 + " years old.");


11.
var radius = 20;
var pi = 3.142;

var circumference = 2 * pi * radius;
var area = pi * radius * radius;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);

12.

var favoritesnack = "Chocolate Chip";
var currentage = 15;
var maxage = 65;
var amountperday = 3;

var totalneededforlife = (maxage - currentage) * amountperday;

document.write("<h1>The Lifetime Supply Calculator</h1>");

document.write("Favourite Snack: " + favoritesnack + "<br>");
document.write("Current Age: " + currentage + "<br>");
document.write("Estimated Maximum Age: " + maxage + "<br>");
document.write("Amount of snacks per day: " + amountperday + "<br>");

document.write(
    "You will need " + totalneededforlife + " " + favoritesnack +
    "s to last you until the ripe old age of " + maxage);
