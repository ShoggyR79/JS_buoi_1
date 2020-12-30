/**
 * toán tử so sánh
 */

 var num1 = 6;
 var num2 = "5";

var result = num1 == num2 // true; false
console.log(result);

// khác !=
var result2 = num1 != num2;
console.log(result2);

// bằng trị và kiểu === 
var result3 = num1 === num2;
console.log(result3);

// > và < lớn hơn / nhỏ hơn   (>= và <== lờn/nhỏ hơn hoặc bằng)
var result4 =num1 > num2;
console.log(result4);


var A = true;
var B = false;
// phủ định !

var result6 = !A;
console.log(result6);

// và &&

var result7 = A && B;

// hoặc ||

num1 = 3;
num2 = 2;

if (num1 < num2){
    console.log("1 lớn hơn 2");
}


/**
 * chuyển số âm sang dương
 */

 var d = -4864;

 if (d < 0){
     d = -d;
 }
 console.log(d);

 var outputFormatted = new Intl.NumberFormat("vn-VN");

 function tinhTienPhat(event){
    event.preventDefault();

    var creditCardBalance = document.getElementById("totalUsage").value;
    var payment = document.getElementById("totalPaid").value;
    var penalty = 0;
    var balance = creditCardBalance-payment;

    if (balance > 0){
        var penalty = outputFormatted.format(balance * 0.015);
    }
    document.getElementById("tienPhatOutput").innerHTML = penalty;
    document.getElementById("footerTienPhat").className = "card-footer d-block";

 }

 var soA = 5;
 var soB = 10;

 if (soA > soB){
     console.log("A lớn hơn")
 }
 else{
     console.log("B lớn hơn")
 }

 function calculateSalary(event){
     event.preventDefault();
     var hours = parseInt(document.getElementById("hoursWorked").value);
     var rate = parseInt(document.getElementById("rate").value);
     var pay = 0

     if (hours > 40){
        pay = (40 * rate)  + ((hours-40) * (rate * 1.5));
     }else{
        pay = hours * rate;
     }

    document.getElementById("salaryOutput").innerHTML = outputFormatted.format(pay);
    document.getElementById("footerSalary").className = "card-footer d-block";

 }

 // DK ? if correct : else;


 var so = 5;

 switch(so){
    case 1:
        console.log("số 1");
        break;
    case 2:
         console.log("số 2");
         break;
    case 3:
         console.log("số 3");
         break;
    case 4:
         console.log("số 4");
         break;
    default:
        console.log("không biết");
        break;
 }