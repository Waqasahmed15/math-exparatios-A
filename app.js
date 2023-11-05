// MATH EXPRESSIONS
// Chapter 5 Q:1

var num1 = 3;
var num2 = 5;
var num3 = num1+num2;
document.write("sum of 3 and 5 is" + " " + num3)


// Chapter 5 Q:2

multipication
var num1 = 3;
var num2 = 5;
var num3 = num1*num2;
 document.write("multiply of 3 and 5 is" + " " + num3)

//devide
var num1 = 3;
var num2 = 5;
var num3 = num1/num2;
 document.write("devide of 3 and 5 is" + " " + num3)

//subtraction
var num1 = 3;
var num2 = 5;
var num3 = num1-num2;
 document.write("subtraction of 3 and 5 is" + " " + num3)

//modulus
var num1 = 3;
var num2 = 5;
var num3 = num1%num2;
 document.write("modulus of 3 and 5 is" + " " + num3)

// Chapter 5 Q:3
"value after variable declaration is undefined";
var a;
document.write("value after variable declaration is undefined <br>")
 var a = 5;
 document.write("Intial Value:" + " " +a + "<br>")
 var a = ++a;
 document.write("Value after increment is:" + " " + a + "<br>")
  a = a+7;

 document.write("Value  after addition is:" + a + "<br>")
 var a = --a;
 document.write("Value after dincrement is:" + " " + a + "<br>")
 a = a%3;
 document.write("The remainder is" + " " + a + "<br>")



// Chapter 5 Q:4
var ticket = 600;
var ticket = ticket*5;
document.write("The Total cost to buy 5 tickets is:" +" " + ticket  )


//                 // Chapter 5 Q:5

// var table = 4;
document.write("Table of" + " " + table + "<br>")
table*1;
document.write("4*1="+ table + "<br>")
var table= table*2;
document.write("4*2="+ table + "<br>")
var table= table+4;
document.write("4*3="+ table + "<br>")
var table= table+4;
document.write("4*4="+ table + "<br>")
var table= table+4;
document.write("4*5="+ table + "<br>")
var table= table+4;
document.write("4*6="+ table + "<br>")
var table= table+4;
document.write("4*7="+ table + "<br>")
var table= table+4;
document.write("4*8="+ table + "<br>")
var table= table+4;
document.write("4*9="+ table + "<br>")
var table= table+4;
document.write("4*10="+ table + "<br>")


                // Chapter 5 Q:6






var celsiusTemperature = (+prompt("Enter a temperature in Celsius:"));

var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F" + "<br/>");

var fahrenheitTemperature = (+prompt("Enter a temperature in Fahrenheit:"));

var celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
document.write(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");

                // Chapter 5 Q:7
var PriceItem1 = 650;
document.write("Price Of Item 1 is " + PriceItem1 + "<br>");
var quantityItem1 = 3;
document.write("Quantity Item 1 is " + quantityItem1);
var PriceItem2 = 100;
document.write("Price Of Item 1 is " + PriceItem1 + "<br>");
var quantityItem1 = 7;
document.write("Quantity Item 1 is " + quantityItem1+ "<br>");
var ShippingCharges = 100;
document.write("Shipping Charges is " +ShippingCharges+ "<br>")
var totalCost = (650*3) + (100*7)+ShippingCharges;
document.write("Total Cost is " + totalCost)

                // Chapter 5 Q:8

var totalMarlks = 980;
document.write( "Total Marks:" +totalMarlks + "<br>")
var obtainedMarks = +prompt();
document.write("Obtained Marks:" +obtainedMarks + "<br>")
var percantage = (obtainedMarks/980*100).toFixed(2);
document.write("Percantage:" +percantage + "%"+ "<br>")

                // Chapter 5 Q:9
document.write("<h1>Currucy in PKR</h1>")
var usDollar = 10;
var totalUs= 10*104.80;

var SaRilyal = 25;
var totalSR= 25*28;

var tatalAmount = totalUs+ totalSR;
document.write("Total Curruncy in PKR:" +tatalAmount + "<br/>")

                // Chapter 5 Q:10
var initialNumber = 7;
var result= (((initialNumber+5)*10)/2);
document.write("risult is :"+ result);

                // Chapter 5 Q:11
var currentYear = 2016;
var bDayYear = 1992;
var curbYear = 2016-1992;
document.write("Your age is :" +curbYear);
                // Chapter 5 Q:12
document.write("<h1>The Life Time Supply Calculator</h1> <br>")
var favSnake = "chocholate chip";
var currAge = 15;
var maxAge = 65;
var estimatedAmountNumber = 3;
var totalSnakeOfMyAge =  (maxAge-currAge)* estimatedAmountNumber;
 document.write("“You will need "+ totalSnakeOfMyAge +" to last you until the ripe old age of " + maxAge)

