function login(event){
    //prevent page from reloading
    event.preventDefault();
    /** 
     * Lấy giá trị từ người dùng nhập vào 2 ô input, tk và mk
     */

    var username = document.getElementById("idInput").value;
    var password = document.getElementById("passwordInput").value;

    document.getElementById("username").innerHTML = username;
    document.getElementById("password").innerHTML = password;

    document.getElementById("footer").className ='card-footer d-block';
}

function calculateTip(event){
    event.preventDefault();

    var totalAmount = document.getElementById("totalAmount").value;
    var tipAmount = parseFloat(document.getElementById("tipAmount").value);
    var splitPerson = document.getElementById("splitPerson").value;

    var payPerPerson = (totalAmount * tipAmount) / splitPerson;

    document.getElementById("payPerPerson").innerHTML = payPerPerson.toFixed(2);
    document.getElementById("footer2").className = 'card-footer d-block';

}

function taoTheDiv(){
    //tạo một thẻ element div
    var tagDiv = document.createElement("div");

    tagDiv.innerHTML = "Đây là thẻ mới tạo"

    //Gán thẻ div mới tạo ra ngoài body html
    document.body.appendChild(tagDiv);
}