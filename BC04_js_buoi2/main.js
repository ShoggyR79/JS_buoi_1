var input = document.getElementById("txtInput");

console.log(input.value);

/**
 * Trong file js những gì liên quan tới từ khóa function thì 
 * sẽ không chạy
 * 
 * => chỉ chạy khi được gọi
 */
function clicked(){
    //takes in new input values
    var newValue = document.getElementById("txtInput").value;
    console.log("Giá trị mới là:  " + newValue);

}

function add(){
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    // console.log(input1);
    // console.log(input2);
    
    var sum = input1 + input2;

    console.log("Sum: " + sum);

    
    //update result value
    var output = "Kết Quả: " + sum;

    
    document.getElementById("result").innerHTML = output;
    document.getElementById("result").className = "outputdisplay";
    //update result2 value
    document.getElementById("result2").innerHTML = output;
    // assign class display to p
    document.getElementById("result2").className = "outputdisplay";
}
function minus(){
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);

    var difference = input1 - input2;
    console.log("Difference: " + difference);

    document.getElementById("result").style= "display:block";
    document.getElementById("result").style.backgroundColor = "lightgreen";
    document.getElementById("result").style.fontSize = "30px";
    //update result value
    var output = "Kết Quả: " + difference;
    document.getElementById("result").innerHTML = output;
}