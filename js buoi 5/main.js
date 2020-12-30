/**
 * Hàm (function)
 * 
 * - hàm không có tham số
 * - hàm có tham số
 * - hàm không có gia trị trả về
 * - hàm có giá trị trả về
 */

function extractInfo(){
    console.log("Hello Nguyen");
}


extractInfo();

var num3 = 1;
var num4 = 120

function sum(num1, num2){
    console.log(num1 + num2);
}

function sum2(){
    console.log(num3 + num4);
}

sum(num3, num4)
sum2();

function nhan(a,b){
    return a*b;
}

console.log(nhan(3, 12));


function oddOrEven(event){
    event.preventDefault();

    var num = parseInt(document.getElementById("inputNum").value);
    var output = oddEven(num);

    document.getElementById("oddEvenOutput").innerHTML = output;
}

function oddEven(num){
    var output;
    (num%2 == 0)? output = "even": output = "odd";
    return output;
}   

function findMax(event){

    event.preventDefault();

    const num1= parseInt(document.getElementById("num1").value);
    const num2= parseInt(document.getElementById("num2").value);
    const num3= parseInt(document.getElementById("num3").value);
 
    var output = max(num1, num2, num3);

    document.getElementById("maxOutput").innerHTML = output;
    document.getElementById("footerMax").className = "card-footer d-block";
}

function max(n1, n2, n3){
    var max = n1;

    if (n2 > n1){
        max = n2;
    }
    if (n3 > n1){
        max = n3;
    }
    return max;
}