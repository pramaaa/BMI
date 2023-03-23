var Hitung = document.querySelector(".hitung");
var hasil = document.querySelector(".hasil");
var penjelasan = document.querySelector(".penjelasan");

Hitung.addEventListener("click", () => {

    var tinggi = Number(document.getElementById("tinggi").value);
    var berat = Number(document.getElementById("berat").value);
    tinggi = tinggi / 100;
    var BMI = berat / (tinggi * tinggi);
    hasil.innerText = BMI;
    
    if (BMI < 18.5) {
        penjelasan.innerText = "Kekurangan Berat Badan";
    } else if ((BMI > 18.5) && (BMI <= 24.9)) {
        penjelasan.innerText = "Normal (Ideal)";
    } else if ((BMI >= 25) && (BMI <= 29.9)) {
        penjelasan.innerText = "Kelebihan berat badan";
    } else {
        penjelasan.innerText = "Kegemukan (Obesitas)";
    }
});

function reset() {
    document.getElementById('berat').value = "";
    document.getElementById('tinggi').value = "";
}