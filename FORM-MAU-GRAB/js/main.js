
var outputFormatted = new Intl.NumberFormat("vn-VN");

//global Variables

var finalPrice = 0;
var carType = "";
var basePrice = 0;
var waitPrice = 0;
var distanceTraveled = 0;
var timeWaited = 0;



function grabCalculation(event){
    event.preventDefault();
    distanceTraveled = parseFloat(document.getElementById("distanceKM").value);
    timeWaited = parseInt(document.getElementById("waitTime").value)

    

    if (document.getElementById("grabX").checked){
        carType = "Grab X";
        basePrice = 8000;
        waitPrice = 2000;
    }else if (document.getElementById("grabSUV").checked){
        carType = "Grab SUV";
        basePrice = 9000;
        waitPrice = 3000;

    }else{
        carType = "Grab Black"
        basePrice = 10000;
        waitPrice = 3500;
    }

    var priceOutput = calculateFares(basePrice, distanceTraveled, waitPrice, timeWaited);

    document.getElementById("xuatTien").innerHTML = outputFormatted.format(priceOutput) + " VND";

    document.getElementById("divThanhTien").style = "display: block;"
}



function calculateFares(basePrice, km, waitPrice, time){
    finalPrice = firstKilo(basePrice, km) + oneToNineTeen(basePrice, km) + aboveNineTeen(basePrice, km);
    finalPrice += findWaitPrice(time, waitPrice)

    return finalPrice;
}

function firstKilo(basePrice, km){
    if (km <= 1){
        return basePrice * km;
    }else{
        return basePrice;
    }
}

function oneToNineTeen(basePrice, km){
     //the if else statements is to aid printing of receipt

    if (distanceTraveled <= 1){
        return 0;
    }
    if (km > 19){
        return (18 * (basePrice-500));
    }
    else{
        return ((km-1) * (basePrice -500));
    }
}

function aboveNineTeen(basePrice, km){
    //the if else statements is to aid printing of receipt

    if (distanceTraveled <= 1){
        return 0;
    }else if (distanceTraveled <= 19 && distanceTraveled > 1){
        return 0;
    }else{
        return ((basePrice - 1000) * (km-19))
    }
}

function findWaitPrice(time, price){
    if (time >= 3){
        return (parseInt((time/3)) * price);
    }
    else{
        return 0;
    }
}


function printReceipt(event){
    
    //in case customer has not calculated price yet, which is neccessary to generate receipt 
    grabCalculation(event);
    //first row
    if (distanceTraveled <= 1){
        document.getElementById("firstKiloUsage").innerHTML = distanceTraveled ;
    }else{
        document.getElementById("firstKiloUsage").innerHTML = 1 ;
    }
    document.getElementById("firstKiloPrice").innerHTML = basePrice;
    document.getElementById("firstKiloTotal").innerHTML = firstKilo(basePrice,distanceTraveled);

    //second row
    if (distanceTraveled <= 1){
        document.getElementById("oneNineteenKiloUsage").innerHTML = 0;

    }else if (distanceTraveled <= 19 && distanceTraveled > 1){
        document.getElementById("oneNineteenKiloUsage").innerHTML = distanceTraveled-1;
    }else{
        document.getElementById("oneNineteenKiloUsage").innerHTML = 18;
    }
    document.getElementById("oneNineteenKiloPrice").innerHTML = basePrice-500;
    document.getElementById("oneNineteenKiloTotal").innerHTML = oneToNineTeen(basePrice,distanceTraveled);

    //third row
    if (distanceTraveled <= 1){
        document.getElementById("aboveNineteenKiloUsage").innerHTML = 0;

    }else if (distanceTraveled <= 19 && distanceTraveled > 1){
        document.getElementById("aboveNineteenKiloUsage").innerHTML = 0;
    }else{
        document.getElementById("aboveNineteenKiloUsage").innerHTML = distanceTraveled - 19;
    }
    document.getElementById("aboveNineteenKiloPrice").innerHTML = basePrice-1000;
    document.getElementById("aboveNineteenKiloTotal").innerHTML = aboveNineTeen(basePrice,distanceTraveled);

    //fourth row
    document.getElementById("timeWaited").innerHTML = timeWaited;
    document.getElementById("timePrice").innerHTML = waitPrice;
    document.getElementById("timeTotal").innerHTML = findWaitPrice(timeWaited,waitPrice);


    //total row
    document.getElementById("totalPriceReceipt").innerHTML = outputFormatted.format(calculateFares(basePrice, distanceTraveled, waitPrice, timeWaited)) + " VND";




}