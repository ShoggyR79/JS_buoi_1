var tenPhim = "Phim";
var giaVeNguoiLon=45000;
var giaVeEmBe = 40000;
var soLuongVeNguoi = 1000;
var soLuongEmBe = 500;
var phanTramTuThien = 0.1;

var total = (giaVeNguoiLon*soLuongVeNguoi) + (giaVeEmBe*soLuongEmBe);
var charity = total * phanTramTuThien;
var profit = total - charity; 

console.log("Doanh Thu:   "+ charity);
console.log(profit);