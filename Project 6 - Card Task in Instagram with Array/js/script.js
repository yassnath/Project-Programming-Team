const menu = ["Es Kopi Susu", "Roti Bakar", "Tahu Telor", "Nasi Goreng"];
const mprice = [10000, 25000, 15000, 12000];

let fpayment = 0;
for (let i = 0; i < mprice.length; i++) {
fpayment += mprice[i];
}
let disc = 0.1 * fpayment;
let payment = fpayment - disc;

document.getElementById("dome1").textContent = "Rp " + fpayment;
document.getElementById("dome2").textContent = "Rp " + disc;
document.getElementById("dome3").textContent = "Rp " + payment;

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