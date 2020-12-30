/**
 * Đầu Vào
 * nhận tên, số lượng, đơn giá
 * 
 * Xử Lý
 * nếu số lượng từ 1 tới 50, giá = số lượng * đơn giá
 * 
 * Đầu Ra
 */

var outputFormatted = new Intl.NumberFormat("vn-VN");


function calcCost(event){
    event.preventDefault();

    var productName = document.getElementById("productName").value;
    var productAmount = parseInt(document.getElementById("productAmount").value);
    var pricePerUnit = parseInt(document.getElementById("pricePerUnit").value);

    var price;

    if (productAmount < 50){
        price = productAmount * pricePerUnit;
    }else if (productAmount >= 50 && productAmount < 100){
        price = ((productAmount - 49) * (pricePerUnit * 0.92)) + (49 * pricePerUnit);
    }else{
        price = ((productAmount - 99) * (pricePerUnit * 0.88)) + ((50) * (pricePerUnit * 0.92)) + (49 * pricePerUnit);
    }

    document.getElementById("thongBao").innerHTML = productName + ",<br>     Giá:    " + outputFormatted.format(price) + " VND";
}