// html table
const data = {
  status: 200,
  message: 'view data collection',
  data: [
    {
      id: 1,
      name: 'Vega',
      age: 25
    },
    {
      id: 2,
      name: 'Yardan',
      age: 50
    },
    {
      id: 3,
      name: 'Taufiq',
      age: 64
    },
    {
      id: 4,
      name: 'Nathan',
      age: 14
    },
    {
      id: 5,
      name: 'Andreas',
      age: 29
    },
    {
      id: 6,
      name: 'Rafi',
      age: 44
    },
    {
      id: 7,
      name: 'Ilham',
      age: 53
    },
    {
      id: 8,
      name: 'Bram',
      age: 32
    },
    {
      id: 9,
      name: 'Fandi',
      age: 10
    },
    {
      id: 10,
      name: 'Riza',
      age: 78
    },
  ]
};

const table = document.getElementById('table');

let pas = 0;
while (pas < data.data.length) {
  const row = document.createElement('tr');
  const id = document.createElement('td');
  id.textContent = data.data[pas].id;
  row.appendChild(id);
  const nama = document.createElement('td');
  nama.textContent = data.data[pas].name;
  row.appendChild(nama);
  const usia = document.createElement('td');
  usia.textContent = data.data[pas].age;
  row.appendChild(usia);
  table.querySelector('tbody').appendChild(row);
  pas++;
}

let usiadibawah20 = 0;
let usiadiatas50 = 0;

let i = 0;
while (i < data.data.length) {
  if (data.data[i].age < 20) {
    usiadibawah20++;
  } else if (data.data[i].age > 50) {
    usiadiatas50++;
  }
  i++;
}

const totalpasien = data.data.length;
document.getElementById('totalpasien').textContent = `Total pasien = ${totalpasien} orang`;
document.getElementById('usiadibawah20').textContent = `Total pasien yang usianya < 20 tahun = ${usiadibawah20} orang`;
document.getElementById('usiadiatas50').textContent = `Total pasien yang usianya > 50 tahun = ${usiadiatas50} orang`;

// 5-mahasiswa
const mhsw = [
  { np: "Taufiq", nilai: 100, figma: true },
  { np: "Rafi", nilai: 73, figma: true },
  { np: "Andreas", nilai: 25, figma: false },
  { np: "Yardan", nilai: 51, figma: false },
  { np: "Nathan", nilai: 67, figma: true },
];

for (let i = 0; i < mhsw.length; i++) {
  let nilai = mhsw[i].nilai;
  if (mhsw[i].figma) {
    nilai += 10;
  }

  let grade = "";
  if (nilai > 100) {
    grade = "A+";
    nilai = 100;
  } else if (nilai >= 80 && nilai <= 100) {
    grade = "A";
  } else if (nilai >= 70 && nilai <= 80) {
    grade = "B";
  } else if (nilai >= 60 && nilai <= 70) {
    grade = "C";
  } else if (nilai >= 50 && nilai <= 60) {
    grade = "D";
  } 
  else {
    grade = "E";
  }
  mhsw[i].nilai = nilai;
  document.getElementById("mhs").innerHTML += `<li>${mhsw[i].np} <br> - Nilai:  ${mhsw[i].nilai} <br> - Grade: ${grade}<br><br></li>`;
}

// new card-task
const lm = [
  { nm: "Nasi Pecel", prc: 12000, varian: ["Pedas Banget", " Pedas", " Original"] },
  { nm: "Nasi Jagung", prc: 10000, varian: ["Pedas Banget", " Pedas", " Original"] },
  { nm: "Nasi Ayam", prc: 15000, varian: ["Pedas Banget", " Pedas", " Original"] },
  { nm: "Nasi Krawu", prc: 10000, varian: ["Pedas Banget", " Pedas", " Original"] },
  { nm: "Nasi Rendang", prc: 15000, varian: ["Pedas Banget", " Pedas", " Original"] },
  { nm: "Nasi Lele", prc: 13000, varian: ["Pedas Banget", " Pedas", " Original"] }
];
const level = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ttl = 0;
let isMember = true;
let lml = "";

for (let b = 0; b < lm.length; b++) {
  if (lm[b].nm !== "Nasi Pecel" || (lm[b].nm === "Nasi Pecel" && isMember)) {
    lml += `<li>${lm[b].nm}: Rp ${lm[b].prc} <br> Varian: ${lm[b].varian.join(', ')}</li>`;
  }
}

const selectedlm = [lm[0].nm , lm[1].nm, lm[4].nm];
let om = "";

for (let a = 0; a < lm.length; a++) {
  if (selectedlm.includes(lm[a].nm)) {
    let variant = lm[a].varian[1];
    let lvlon = "";
    if (lm[a].nm === "Nasi Jagung") {
      lvlon = level[9];
      variant = "Pedas Banget";
    } else if (lm[a].nm === "Nasi Rendang") {
      variant = "Original";
    // } else if (lm[a].nm === "Nasi Pecel") {
    //   if (isMember) {
    //     ttl += 5000;
    //     om += `<li>Nasi Pecel: Rp 5000 (PROMO)<br> Varian: ${variant}</li>`;
    //   }
    }
    // if (lm[a].nm === "Nasi Pecel" && !isMember) {
    //   ttl += 5000;
    //   om += `<li>Nasi Pecel: Rp 5000 (PROMO)<br> Varian: ${variant}</li>`;
    // }
    
    if (lm[a].nm === "Nasi Jagung" || lm[a].nm === "Nasi Rendang" || lm[a].nm === "Nasi Pecel") {
      if (lm[a].nm === "Nasi Pecel") {
        lm[a].prc = 5000
      } 
      ttl += lm[a].prc;
      om += `<li>${lm[a].nm}: Rp ${lm[a].prc} <br> Varian: ${variant} ${lvlon > 0 ? `+ level ${lvlon}` : ""}</li>`;
    }
  }
}

let discprc = 0.1;
let tax = 0.11;
let ttlprc = ttl;

if (isMember) {
  ttlprc = ttl - (ttl * discprc) + (ttl * tax);
} else {
  ttlprc = ttl;
}

document.getElementById("list").innerHTML = lml;
document.getElementById("order").innerHTML = om;
document.getElementById("ttl-harga").innerHTML = "Rp" + `${ttlprc}`;

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
