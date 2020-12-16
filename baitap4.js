//$1 = 23,500 VND
const RATE = 23500;
var dollars = 100;


var vnd = dollars * RATE;

//format output

var outputFormatted = new Intl.NumberFormat("vn-VN");

console.log("VND: " + outputFormatted.format(vnd));

