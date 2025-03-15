// let msg = "    Hello    ";
// let pwd = prompt("Set your password");
// let newPwd = pwd.trim();
// console.log(newPwd);

// let str = "nehal shaikh";
// let str1 = "NEHAL SHAIKH";
// console.log(str.toUpperCase());
// console.log(str1.toLowerCase());

let str = "nehalshaikhbe2025";
console.log(str.indexOf("neh"));
console.log(str.indexOf("2025"));
console.log(str.indexOf("aikh"));
console.log(str.indexOf("a"));

//Method Chaining :

// let msg = "   nehal   ";
// let newMsg = msg.trim();
// console.log(`After trim : ${newMsg}`);
// newMsg = newMsg.toUpperCase();
// console.log(`After Uppercase : ${newMsg}`);
// let newMsg = msg.trim().toUpperCase();
// console.log(`After trim & Upper case : ${newMsg}`);

//Slice Method

let msg = "hellonehalshaikh";
console.log(msg.slice(4, msg.length));
console.log(msg.slice(-6, -1));

let avg = "nehalshaikh";
avg = avg.replace("n", "b");
avg = avg.replace("ikh", "zia");
console.log(avg);

let fruitt = "Mango";
console.log(fruitt.repeat(5));

//Practice Q's
let talk = "hello!";
console.log(talk.trim().toUpperCase());

let name = "ApnaCollege";
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
console.log(name.slice(4).replace("l", "t").replace("l", "t"));


//Array (Data Structure)
let nums = [2, 4, 6, 8];
console.log(nums[1]);

let myInfo = ["Nehal", 21, 72.63];
console.log(myInfo[0][0]);
console.log(myInfo);
myInfo[2] = 66.40;
myInfo[10] = "Ehtesham";
console.log(myInfo);

//Array Methods : Pusp, Pop, Unshift, Shift
let cars = ["BMW", "AUDI", "XUV", "PORSCHE"];
console.log(cars);
cars.pop();
console.log(cars)
cars.push("TOYOTA");
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Ferrari");
console.log(cars);

let followers = ["ehtesham", "sufiyan", "amaan", "bhoomee"]
console.log(followers);
let blockedFoll = followers.shift();
console.log(followers);
console.log(blockedFoll);

//practice Qs

let months = ["january", "july", "march", "august"];
console.log(months);
months.shift();
months.shift();
console.log(months);
months.unshift("june");
months.unshift("july");
console.log(months);

let colors = ["red", "blue", "green"];
//includes: search for a value.
console.log(colors.includes("red"));

//indexOf: returns index value in array
console.log(colors.indexOf("green"));

//concat: merge two arrays

let colorsTwo = ["orange", "white", "black"];
let colorsConcat = colors.concat(colorsTwo)
console.log(colorsConcat)

//reverse: reverse an array

console.log(colorsConcat.reverse());

//SLice
console.log(colorsConcat.slice());
console.log(colorsConcat.slice(2));
console.log(colorsConcat.slice(2,3));
console.log(colorsConcat.slice(-2));