// object
const listMenus = [
    { nama: "Es Kopi Susu", harga: 10000 },
    { nama: "Roti Bakar", harga: 25000 },
    { nama: "Tahu Telor", harga: 15000 },
    { nama: "Nasi Goreng", harga: 12000 },
];

//document.getElementById("me1").innerHTML = listMenus.menus1.nama + ": Rp " + listMenus.menus1.harga;
//document.getElementById("me2").innerHTML = listMenus.menus2.nama + ": Rp " + listMenus.menus2.harga;
//document.getElementById("me3").innerHTML = listMenus.menus3.nama + ": Rp " + listMenus.menus3.harga;
//document.getElementById("me4").innerHTML = listMenus.menus4.nama + ": Rp " + listMenus.menus4.harga;

let tot = 0;
let menus = "";
for (let i = 0; i < listMenus.length; i++) {
  menus += `<li class="menus">${listMenus[i].nama}: Rp ${listMenus[i].harga}</li>`;
  tot += listMenus[i].harga;
}
let discount = 0.1 * tot;
let totpay = tot - discount;

document.getElementById("menus").innerHTML = menus;
document.getElementById("doem1").innerHTML = "Rp " + tot;
document.getElementById("doem2").innerHTML = "Rp " + discount;
document.getElementById("doem3").innerHTML = "Rp " + totpay;

// array
const mm = ["Es Kopi Susu", "Roti Bakar", "Tahu Telor", "Nasi Goreng"];
const mprice = [10000, 25000, 15000, 12000];

document.getElementById("m1").innerHTML = mm[0] + ": Rp " + mprice[0];
document.getElementById("m2").innerHTML = mm[1] + ": Rp " + mprice[1];
document.getElementById("m3").innerHTML = mm[2] + ": Rp " + mprice[2];
document.getElementById("m4").innerHTML = mm[3] + ": Rp " + mprice[3]; 
mm[0] = 10000;
mm[1] = 25000;
mm[2] = 15000;
mm[3] = 12000;

let fpayment = mm[0] + mm[1] + mm[2] + mm[3];
let disc = 0.1 * fpayment;
let payment = fpayment - disc;

document.getElementById("dome1").innerHTML = "Rp " + fpayment;
document.getElementById("dome2").innerHTML = "Rp " + disc;
document.getElementById("dome3").innerHTML = "Rp " + payment;

// variable
const makanan = ["10000", "25000", "15000"];
const makanan_1 = 10000;
const makanan_2 = 25000;
const makanan_3 = 15000;
let total = makanan_1 + makanan_2 + makanan_3;
let diskon = 0.1 * total;
let totalbayar = total - diskon;

document.getElementById("demo1").textContent = "Rp " + total; 
document.getElementById("demo2").innerHTML = "Rp " + diskon;
document.getElementById("demo3").innerHTML = "Rp " + totalbayar;

// scroll story
function scrollHorizontal(direction) {
    const container = document.querySelector('.stories__content');
    const scrollAmount = 300; // Atur jumlah penggeseran scroll
  
    if (direction === 1) {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
