1.
var a = 10;

document.write("Result:<br>");
document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

2.            
var a = 2;
var b = 1;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");

var result = --a - --b + ++b + b--;
document.write("Result:" + result + "<br>" );


3.
var name = prompt("Enter your name");
alert("Welcome " + name + "!")

5.
var num = prompt("Enter a number", 5);

document.write("<h2>Multiplication Table of " + num + "</h2>");

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
var sub1 = prompt("Enter first subject name");
var sub2 = prompt("Enter second subject name");
var sub3 = prompt("Enter third subject name");

var totalMarks = 100;

var marks1 = +prompt("Enter marks for " + sub1);
var marks2 = +prompt("Enter marks for " + sub2);
var marks3 = +prompt("Enter marks for " + sub3);

var totalObtained = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var percentage = (totalObtained / grandTotal) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");

document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + marks1 + "</td><td>" + (marks1) + "%</td></tr>");

document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + marks2 + "</td><td>" + (marks2) + "%</td></tr>");

document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + marks3 + "</td><td>" + (marks3) + "%</td></tr>");

document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");

document.write("</table>");