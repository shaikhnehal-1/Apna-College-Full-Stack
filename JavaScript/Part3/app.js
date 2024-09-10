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
console.log(msg.slice(-2, -1));

let avg = "nehalshaikh";
avg = avg.replace("neh", "beh");
console.log(avg);