//function để làm bài tập 1 VÀ 2 
function endDateFind(monthInput, yearInput){
    var leapYear = (yearInput % 4 == 0);
    var extendedMonth = (monthInput % 2 ==0);
    
    var endDate = 30;

    if(monthInput == 2){
        if (leapYear){
            endDate = 29;
        }
        else{
            endDate = 28;
        }
    }else if (extendedMonth){
        endDate = 31;
    } 
    return endDate;
}

function adjacentDates(event){
    event.preventDefault();

    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);   
    
    
    var endDate = endDateFind(month , year);
    var outputNext  = "";
    var outputPrev = "";
    // find days

    //"normal situation"
    if (day != endDate && day != 1){
        outputNext = outputNext + (day + 1) + "/" + month + "/" + year;
        outputPrev = outputPrev + (day - 1) + "/" + month + "/" + year;
    }
    // when day is final day of a month
    else if (day == endDate){
        if (month != 12){
            outputNext = outputNext + "1" + "/" + (month+1) + "/" + year;
            outputPrev = outputPrev + (day - 1) + "/" + month + "/" + year;
        }else{
            outputNext = outputNext + "1" + "/" + (01) + "/" + (year + 1);
            outputPrev = outputPrev + (day - 1) + "/" + month + "/" + year;
        }
    }
    // when day is first day of a month
    else{
        if (month != 1){
            outputNext = outputNext + (day + 1) + "/" + month + "/" + year;
            outputPrev = outputPrev + (endDateFind(month-1, year)) + "/" + (month-1) + "/" + year;
        }else{
            outputNext = outputNext + (day + 1) + "/" + month + "/" + year;
            outputPrev = outputPrev + ("31") + "/" + "12" + "/" + (year-1);
        }

    }



    document.getElementById("previousDayOutput").innerHTML = outputPrev;
    document.getElementById("nextDayOutput").innerHTML = outputNext;

    document.getElementById("footerDates").className = "card-footer d-block";
}




function numOfDays(event){
    event.preventDefault();

    var month = parseInt(document.getElementById("month2").value);
    var year = parseInt(document.getElementById("year2").value); 
    
    
    var numOfDays = endDate(month , year);

    document.getElementById("daysOutput").innerHTML = numOfDays;

    document.getElementById("footerNumDates").className = "card-footer d-block";

}

function howToRead(event){
    event.preventDefault();

    var num = parseInt(document.getElementById("threeDigitNum").value);

    var firstDigit = parseInt(num / 100);
    var secondDigit = parseInt((num%100) / 10);
    var thirdDigit = parseInt((num%100) % 10);

    var firstText = "";
    var secondText = "";
    var thirdText = "";

    var output = "";
    //converting numbers to text readings
    switch (firstDigit){
        case 1:
            firstText = "Một trăm ";
            break;
        case 2:
            firstText = "Hai trăm ";
            break;
        case 3:
            firstText = "Ba trăm ";
            break;
        case 4:
            firstText = "Bốn trăm ";
            break;
        case 5:
            firstText = "Năm trăm ";
            break;
        case 6:
            firstText = "Sáu trăm ";
            break;
        case 7:
            firstText = "Bảy trăm ";
            break;
        case 8:
            firstText = "Tám trăm ";
            break;
        case 9:
            firstText = "Chín trăm ";
            break;
    }
    switch (secondDigit){
        case 0:
            if (thirdDigit == 0){
                secondText = " ";
            }else{         
                secondText = "lẻ ";
            }
            break;
        case 1:
            secondText = "mười ";
            break;
        case 2:
            secondText = "hai mươi ";
            break;
        case 3: 
            secondText = "ba mươi ";
            break;
        case 4:
            secondText = "bốn mươi ";
            break;
        case 5:
            secondText = "năm mươi ";
            break;
        case 6:
            secondText = "sáu mươi ";
            break;
        case 7:
            secondText = "bảy mươi ";
            break;
        case 8:
            secondText = "tám mươi ";
            break;
        case 9:
            secondText = "chín mươi ";
            break;
    }
    switch (thirdDigit){
        case 0:
            thirdText = "";
            break;
        case 1:
            thirdText = "mốt";
            break;
        case 2:
            thirdText = "hai";
            break;
        case 3:
            thirdText = "ba";
            break;
        case 4:
            thirdText = "bốn";
            break;
        case 5:
            thirdText = "lăm";
            break;
        case 6:
            thirdText = "sáu";
            break;
        case 7:
            thirdText = "bảy";
            break;
        case 8:
            thirdText = "tám";
            break;
        case 9:
            thirdText = "chín";
            break;
    }

    // Constructing the Output

    output = firstText + secondText + thirdText;




    document.getElementById("readOutput").innerHTML = output;

    document.getElementById("footerRead").className = "card-footer d-block";

}



function distanceCalc(event){
    event.preventDefault();

    var studentOneName = document.getElementById("studentOneName").value;
    var studentOneX = parseInt(document.getElementById("studentOneX").value);
    var studentOneY = parseInt(document.getElementById("studentOneY").value);

    var studentTwoName = document.getElementById("studentTwoName").value;
    var studentTwoX = parseInt(document.getElementById("studentTwoX").value);
    var studentTwoY = parseInt(document.getElementById("studentTwoY").value);

    var studentThreeName = document.getElementById("studentThreeName").value;
    var studentThreeX = parseInt(document.getElementById("studentThreeX").value);
    var studentThreeY = parseInt(document.getElementById("studentThreeY").value);

    var collegeX = parseInt(document.getElementById("collegeX").value);
    var collegeY = parseInt(document.getElementById("collegeY").value);


    var farthestStudent = "";
    var farthestValue = 0;

    
    //calculating distance
    var distanceOne = Math.sqrt( Math.pow(collegeX-studentOneX, 2) + Math.pow(collegeY-studentOneY,2));
    if (distanceOne > farthestValue){
        farthestStudent = studentOneName;
        farthestValue = distanceOne;
    }
    var distanceTwo = Math.sqrt( Math.pow(collegeX-studentTwoX, 2) + Math.pow(collegeY-studentTwoY,2));
    if (distanceTwo > farthestValue){
        farthestStudent = studentTwoName;
        farthestValue = distanceTwo;
    }
    var distanceThree = Math.sqrt( Math.pow(collegeX-studentThreeX, 2) + Math.pow(collegeY-studentThreeY,2));
    if (distanceThree > farthestValue){
        farthestStudent = studentThreeName;
        farthestValue = distanceThree;
    }


    document.getElementById("studentNameOutput").innerHTML = farthestStudent;
    document.getElementById("studentDistanceOutput").innerHTML = farthestValue;

    document.getElementById("footerDistance").className = "card-footer d-block";
}