//Qs1.Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
let num = 50;

if (num % 10 === 0) {
  console.log("good");
} else {
  console.log("bad");
}

//Qs2.Taketheuser'sname&ageasinputusingprompts.Thenreturnbackthefollowingstatementtotheuserasanalert(bysubstitutingtheirname&age):nameisageyearsold.[UsetemplateLiteralstoprintthissentence]
// let userName = prompt("Enter your name : ");
// let userAge = prompt("Enter your age : ");
// alert(`${userName} is ${userAge} years old.`);

//Qs3.Writeaswitchstatementtoprintthemonthsinaquarter.MonthsinQuarter1:January,February,MarchMonthsinQuarter2:April,May,JuneMonthsinQuarter3:July,August,SeptemberMonthsinQuarter4:October,November,December[Usethenumberasthecasevalueinswitch]
let quarter = 1;

switch (quarter) {
  case 1:
    console.log("January, February, March.");
    break;
  case 2:
    console.log("April, May, June.");
    break;
  case 3:
    console.log("July, August, September.");
    break;
  case 4:
    console.log("October, November, December.");
    break;
  default:
    console.log("There are only 4 quarters in a year.");
}

//Qs4.Astringisagoldenstringifitstartswiththecharacter‘A’or‘a’andhasatotallengthgreaterthan5.Foragivenstringprintifitisgoldenornot.
let str = "Applepie";

if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
  console.log("Golden String");
} else {
  console.log("Not a Golden String.");
}

//Qs5.Writeaprogramtofindthelargestof3numbers.

let num1 = 500;
let num2 = 100;
let num3 = 10;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1, "is largest.");
  } else {
    console.log(num3, "is largest.");
  }
} else {
  if (num2 > num3) {
    console.log(num2, "is largest.");
  } else {
    console.log(num3, "is largest");
  }
}

//Qs6(Bonus).Writeaprogramtocheckif2numbershavethesamelastdigit.Eg:32and47852havethesamelastdigiti.e.2
//Method 1
let n1 = "55";
let n2 = "789876";
if (n1[n1.length - 1] === n2[n2.length - 1]) {
  console.log(`Last digit of ${n1} & ${n2} are same.`);
} else {
  console.log(`The last digits of ${n1} & ${n2} are not same`);
}

//Method 2
let nm1 = 55;
let nm2 = 789875;

if (nm1 % 10 === nm2 % 10) {
  console.log(`Last digit of ${nm1} & ${nm2} are same.`);
} else {
  console.log(`The last digits of ${nm1} & ${nm2} are not same`);
}
