var outputFormatted = new Intl.NumberFormat("vn-VN");
//Bài Tập 1

function orderNum(event){
    event.preventDefault();

    const num1= parseInt(document.getElementById("num1").value);
    const num2= parseInt(document.getElementById("num2").value);
    const num3= parseInt(document.getElementById("num3").value);


    var output = "";

    if  ((num1 < num2 ) && (num1 < num3)){
        if (num2 < num3){
            output = (num1 + ", " + num2 + ", " + num3);
        }
        else{
            output = (num1 + ", " + num3 + ", " + num2);
        }
    }else if ((num2 < num1) && (num2 < num3)){
        if (num1 < num3){
            output =(num2 + ", " + num1 + ", " + num3);
        }
        else{
            output =(num2 + ", " + num3 + ", " + num1);
        }
    }else{
        if(num1 <num2){
            output = (num3 + ", " + num1 + ", " + num2);
        }
        else{
            output = (num3 + ", " + num2 + ", " + num3);
        }
    }

    document.getElementById("orderedOutput").innerHTML = output;
    document.getElementById("footerOrder").className = "card-footer d-block";
}

//Bài Tập 2

function greeting(event){
    event.preventDefault();
    var user = document.getElementById("userType").value;
    var output = ""

    switch(user){
        case "B":
            output = "Bố";
            break;
        case "M":
            output = "Mẹ";
            break;
        case "A":
            output = "Anh Trai";
            break;
        default:
            output = "Em Gái"
    }
    document.getElementById("greetingOutput").innerHTML = output;
    document.getElementById("footerGreeting").className = "card-footer d-block";
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

function countOddEven(event){
    event.preventDefault();
    var num1 = parseInt(document.getElementById("bai3num1").value);
    var num2 = parseInt(document.getElementById("bai3num2").value);
    var num3 = parseInt(document.getElementById("bai3num3").value);

    var even = 0;
    var odd = 0;

    (num1%2 == 0)? even++ : odd++;
    (num2%2 == 0)? even++ : odd++;
    (num3%2 == 0)? even++ : odd++;

    document.getElementById("evenOutput").innerHTML = even;
    document.getElementById("oddOutput").innerHTML = odd;

    document.getElementById("footerOddEven").className = "card-footer d-block"

}

function whatTriangle(event){
    event.preventDefault();
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);

    var output = "";

    
    if (side1 == side2  && side1 == side3 && side2 == side3){
        output = "Tam giác đều"
    }
    else if((side1 == side2) || (side2 == side3) || (side3==side1)){
        output = "Tam giác cân"
    }
    else if(((Math.pow(side1,2) + Math.pow(side2,2)) == Math.pow(side3,2)) || 
           ((Math.pow(side3,2) + Math.pow(side2,2)) == Math.pow(side1,2))  ||  
           ((Math.pow(side3,2) + Math.pow(side1,2)) == Math.pow(side2,2))) {

        output = "Tam giác vô"
    }
    else{
        output = "Tam giác thường"
    }

    document.getElementById("triangleOutput").innerHTML = output;
    document.getElementById("footerTriangle").className = "card-footer d-block";
}



