//Exercise 1
let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, challenge.length));
console.log(challenge.substring(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));

let str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(str.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let str2 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str2.indexOf("because"));
console.log(str2.lastIndexOf("because"));
console.log(str2.search("because"));

let str3 = " 30 Days Of JavaScript ";
console.log(str3.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("t"));
console.log(challenge.match("a"));

let str4 = "30 Days of ";
console.log(str4.concat("JavaScript"));
console.log(challenge.repeat(2));

// Exercise 2
let str5 =
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.'\
by John Holmes teaches us to help one another.";
console.log(str5);

let str6 = `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`;
console.log(str6);

console.log(typeof parseInt("10") == typeof 10);
console.log(Math.ceil(parseFloat("9.8")) == 10);
console.log("python".includes("on"));
console.log("jargon".includes("on"));
console.log("I hope this course is not full of jargon.".includes("jargon"));

console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));

let str7 = "JavaScript";
let index = Math.floor(Math.random() * 10);
console.log(str7[index]);

let str8 = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(str8);

let str9 =
  "You cannot end a sentence with because because because is a conjunction";
let start = str9.indexOf("because");
let s1 = str9.substring(0, start - 1);
let end = str9.lastIndexOf("because");
let s2 = str9.substring(end + "because".length, str9.length);
console.log(s1.concat(s2));

// Exercise 3
let str10 =
  'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let re = /love/gi
console.log(str10.match(re).length);

let re2 = /because/gi
console.log(str9.match(re2).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let sentence2 = sentence

// Dùng Regular Expression với toán tử OR 
sentence2 = sentence2.replace(/%|@|&|#|;|/g,'')
// Dùng Regular Expression với lớp ký tự
sentence2 = sentence2.replace(/[%@&#;]/g,'')
// Dùng Regular Expression với Escape Sequences
sentence2 = sentence2.replace(/\$/g,'')
console.log(sentence2)

let str11 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let arr = str11.match(/\d+/g)
console.log(arr)
console.log((+arr[0] + +arr[2])*12 + +arr[1])



