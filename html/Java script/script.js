document.write("<h1>I am External Java Script</h1>");

function showDate(){
	document.getElementById('datep').innerHTML=Date();
}

// FOR OBJECT IN JAVASCRIPT.
 let person = {
 	fname: "Debrath",
 	lname:"Sharma",
 	age:18,
 	locaion: "Kathmandu",

 	fullname: function(){
 		return this.fname + " " + this.lname;
 		

 	}
 };

 document.write(person.fullname());
document.write("<br>");

let a= Math.PI;
document.write(a);

document.write("<br>");

// TO MAke A Radom Dice Game In Java Script..
let ab= (Math.random()*6).toFixed(0);
document.write(ab);





//Alert Message
alert("I am Gorkhali Hacker");

// Introduction To java Script..

//declaring variable
/*let a=10;	//Variabe ko laagi let ko satta ( var ) pani use garna milxa hai
let b=50;
let sum=a+b;
let div=a/b;
let mul=a*b;
let mod=a%b;
const pi=3.142;
let c=pi*a*b;

let fname= "Debrath";
let lname= "Sharma";

let myAge		//Pascal case
myAge           //camel case		

document.write(sum);
document.write(div);
document.write(mul);
document.write(mod);
document.write(c);
document.write(fname + lname);
//console bata hai ta (console bhaneko chahin developer ko laagi ho hai)

console.log(sum);
console.log(div);
console.log(mul);
console.log(mod);
console.log(c)

// If Statement....
let myAge=21;

if  (myAge>18){
	document.write("You are voter");
}
	else if (myAge==18){
		document.write("You are just 18, cant vote");
	}
	else{
		document.write("You cannot vote<br>");
	}

//Looping in Javascript using for loop
for(let i=1;i<=100;i++)
{
	document.write("Debrath Hero  <br>");
}

//Looping using while loop.
let s=0;
while(s<=50){
	document.write("<br>"+i);
	i++;
}  

//DoWhile loop....
let w=0;
do{
	document.write(a);
	a++
}while(a<=100);
*/

/*
//ARRAY IN JAVASCRIPT.....
const days= ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 document.write(days[0]);

days.forEach(function(abc){document.write(abc+" ")})

days.shift(); // Shift le array ma bhayeko 1st value lai hataunxa.
document.write("<br>");
days.forEach(function(abc){document.write(abc+" ")})

days.unshift("Hello"); //Unshift le chahin array ma agadi value thapdinxa.
document.write("<br>");
days.forEach(function(abc){document.write(abc+" ")})

days.pop(); // pop le chahin array ma last ko value hataunxa
days.forEach(function(abc){document.write(abc+" ")})

days.push("Kukhuri kaa");// push le chahin last ma add garxa array ko in java script
days.forEach(function(abc){document.write(abc+" ")})

days.splice(1,3,"ABCDEFG"); // Splice le chahin 1 element dekhi 3 element samma ko element hatayera
//inserted varible rakhdincha bichha ma array ko in java script.
days.forEach(function(abc){document.write(abc+" ")})


//Function in Javascript 
function printName(){
	document.write("Debrath Sharma");
}

function printName(){
	document.getElementById('info').innerHTML= "Debrath Hero";
}
*/
function calculateInterest(){
	let principal = document.getElementById('p').value;
	let rate = document.getElementById('r').value;
	let time = document.getElementById('t').value;

let si=principal*rate*time / 100;

document.getElementById('info1').innerHTML= si;

}




















