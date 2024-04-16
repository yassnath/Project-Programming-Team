// function calculator table
let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = null;

function addNumber(number) {
  currentNumber += number;
  display.innerHTML = currentNumber;
}

function operate(op) {
  if (operator !== null) calculate();
  operator = op;
  previousNumber = currentNumber;
  currentNumber = '';
  display.innerHTML = `${previousNumber} ${op} ${currentNumber}`;
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current == 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prev / current;
      break;
  }
  display.innerHTML = `${previousNumber} ${operator} ${currentNumber} = ${result}`;
  currentNumber = result;
  operator = null;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = null;
  display.innerHTML = 0;
}

function deleteNumber() {
  if (currentNumber.length > 0) {
    currentNumber = currentNumber.slice(0, -1);
    display.innerHTML = currentNumber;
  }
}

let del = document.getElementById('del');
del.addEventListener('click', deleteNumber);

// function table 2
function tbl2(tablekedua) {
  const tabel2 = document.getElementById("table-kedua");
  let ttlgaji = 0;
  let dibawah20 = 0;
  let diatas40 = 0;
  let umur14 = 0;

  for (let i = 0; i < tablekedua.data.length; i++) {
    const busur = document.createElement("tr");
    const id_pas = document.createElement("td");
    id_pas.textContent = tablekedua.data[i].id_pas;
    busur.appendChild(id_pas);
    const nma = document.createElement("td");
    nma.textContent = tablekedua.data[i].nma;
    busur.appendChild(nma);
    const u = document.createElement("td");
    u.textContent = tablekedua.data[i].u;
    busur.appendChild(u);
    const pendapatan = document.createElement("td");
    pendapatan.textContent = "Rp " + tablekedua.data[i].pendapatan;
    busur.appendChild(pendapatan);
    tabel2.appendChild(busur);

    ttlgaji += tablekedua.data[i].pendapatan;

    if (tablekedua.data[i].u >= 40) {
      diatas40 += tablekedua.data[i].pendapatan;
    } else if (tablekedua.data[i].u < 20) {
      dibawah20 += tablekedua.data[i].pendapatan;
    } else if (tablekedua.data[i].u === 14) {
      umur14 = tablekedua.data[i].pendapatan;
    }
  }

  if (ttlgaji > 1000000) {
    umur14 = 1000000;
  }

  document.getElementById("ttl-gaji").textContent = `Total gaji keseluruhan = Rp ${ttlgaji}`;
  document.getElementById("umur14").textContent = `Total gaji yang usianya 14 tahun = Rp ${umur14}`;
  document.getElementById("dibawah20").textContent = `Total gaji yang usianya < 20 tahun = Rp ${dibawah20}`;
  document.getElementById("diatas40").textContent = `Total gaji yang usianya > 40 tahun = Rp ${diatas40}`;
}

const dta = {
  status: 200,
  message: "view data collection",
  data: [
    {
      id_pas: 1,
      nma: "Vega",
      u: 25,
      pendapatan: 10000000,
    },
    {
      id_pas: 2,
      nma: "Yardan",
      u: 50,
      pendapatan: 7000000,
    },
    {
      id_pas: 3,
      nma: "Taufiq",
      u: 64,
      pendapatan: 3500000,
    },
    {
      id_pas: 4,
      nma: "Nathan",
      u: 14,
      pendapatan: 3000000,
    },
    {
      id_pas: 5,
      nma: "Andreas",
      u: 29,
      pendapatan: 20500000,
    },
    {
      id_pas: 6,
      nma: "Rafi",
      u: 44,
      pendapatan: 5050000,
    },
    {
      id_pas: 7,
      nma: "Ilham",
      u: 53,
      pendapatan: 9500000,
    },
    {
      id_pas: 8,
      nma: "Bram",
      u: 32,
      pendapatan: 59050000,
    },
    {
      id_pas: 9,
      nma: "Fandi",
      u: 10,
      pendapatan: 1505000,
    },
    {
      id_pas: 10,
      nma: "Riza",
      u: 78,
      pendapatan: 30000000,
    },
  ],
};

tbl2(dta);

// function table 1
function tabelpertama(tbl) {
  const table = document.getElementById('table-pertama');

  let pelanggan = 0;
  while (pelanggan < tbl.data.length) {
    const panah = document.createElement('tr');
    const id_pelanggan = document.createElement('td');
    id_pelanggan.textContent = tbl.data[pelanggan].id_pelanggan;
    panah.appendChild(id_pelanggan);
    const jeneng = document.createElement('td');
    jeneng.textContent = tbl.data[pelanggan].jeneng;
    panah.appendChild(jeneng);
    const umur = document.createElement('td');
    umur.textContent = tbl.data[pelanggan].umur;
    panah.appendChild(umur);
    table.querySelector('tbody').appendChild(panah);
    pelanggan++;
  }

  let umurunder20 = 0;
  let umurover50 = 0;

  let i = 0;
  while (i < tbl.data.length) {
    if (tbl.data[i].umur < 20) {
      umurunder20++;
    } else if (tbl.data[i].umur > 50) {
      umurover50++;
    }
    i++;
  }

  const totalpelanggan = tbl.data.length;
  document.getElementById('totalpelanggan').textContent = `Total pasien = ${totalpelanggan} orang`;
  document.getElementById('umurunder20').textContent = `Total pasien yang umurnya < 20 tahun = ${umurunder20} orang`;
  document.getElementById('umurover50').textContent = `Total pasien yang umurnya > 50 tahun = ${umurover50} orang`;
}

const tbl = {
  status: 200,
  message: 'view data collection',
  data: [
    {
      id_pelanggan: 1,
      jeneng: 'Vega',
      umur: 25
    },
    {
      id_pelanggan: 2,
      jeneng: 'Yardan',
      umur: 50
    },
    {
      id_pelanggan: 3,
      jeneng: 'Taufiq',
      umur: 64
    },
    {
      id_pelanggan: 4,
      jeneng: 'Nathan',
      umur: 14
    },
    {
      id_pelanggan: 5,
      jeneng: 'Andreas',
      umur: 29
    },
    {
      id_pelanggan: 6,
      jeneng: 'Rafi',
      umur: 44
    },
    {
      id_pelanggan: 7,
      jeneng: 'Ilham',
      umur: 53
    },
    {
      id_pelanggan: 8,
      jeneng: 'Bram',
      umur: 32
    },
    {
      id_pelanggan: 9,
      jeneng: 'Fandi',
      umur: 10
    },
    {
      id_pelanggan: 10,
      jeneng: 'Riza',
      umur: 78
    },
  ]
};

tabelpertama(tbl);

// function with if else
function tampilnilai(lmhsw) {
  const list = document.getElementById("list-mhs");

  for (let i = 0; i < lmhsw.length; i++) {
    let value = lmhsw[i].value;
    if (lmhsw[i].isfigma) {
      value += 10;
    }

    let output = "";
    if (value > 100) {
      output = "A+";
      value = 100;
    } else if (value >= 80) {
      output = "A";
    } else if (value >= 70) {
      output = "B";
    } else if (value >= 60) {
      output = "C";
    } else if (value >= 50) {
      output = "D";
    } else {
      output = "E";
    }
    lmhsw[i].value = value;

    const li = document.createElement("li");
    li.innerHTML = `${lmhsw[i].nmhs} <br> - Nilai:  ${lmhsw[i].value} <br> - Grade: ${output}<br><br>`;
    list.appendChild(li);
  }
}

const lmhsw = [
  { nmhs: "Taufiq", value: 100, isfigma: true },
  { nmhs: "Rafi", value: 73, isfigma: true },
  { nmhs: "Andreas", value: 25, isfigma: false },
  { nmhs: "Yardan", value: 51, isfigma: false },
  { nmhs: "Nathan", value: 67, isfigma: true },
];

tampilnilai(lmhsw);

// function with object in array
function tampil(menutersedia, lvlpb, ismem) {
  let ts = 0;
  let mtd = "";
  for (let b = 0; b < menutersedia.length; b++) {
    if (menutersedia[b].nmt!== "Nasi Pecel" || (menutersedia[b].nmt === "Nasi Pecel" && ismem)) {
      mtd += `<li>${menutersedia[b].nmt}: Rp ${menutersedia[b].hargo} <br> Varian: ${menutersedia[b].var.join(', ')}</li>`;
    }
  }

  const menukepilih = [menutersedia[0].nmt, menutersedia[1].nmt, menutersedia[4].nmt];
  let myd = "";

  for (let a = 0; a < menutersedia.length; a++) {
    if (menukepilih.includes(menutersedia[a].nmt)) {
      let vart = menutersedia[a].var[1];
      let lvlbrp = "";
      if (menutersedia[a].nmt === "Nasi Jagung") {
        lvlbrp = lvlpb[9];
        vart = "Pedas Banget";
      } else if (menutersedia[a].nmt === "Nasi Rendang") {
        vart = "Original";
      }

      if (menutersedia[a].nmt === "Nasi Jagung" || menutersedia[a].nmt === "Nasi Rendang" || menutersedia[a].nmt === "Nasi Pecel") {
        if (menutersedia[a].nmt === "Nasi Pecel") {
          menutersedia[a].hargo = 5000
        } 
        ts += menutersedia[a].hargo;
        myd += `<li>${menutersedia[a].nmt}: Rp ${menutersedia[a].hargo} <br> var: ${vart} ${lvlbrp > 0? `+ level ${lvlbrp}` : ""}</li>`;
      }
    }
  }

  let potonganhargo = 0.1;
  let pajak = 0.11;
  let tyhd = ts;

  if (ismem) {
    tyhd = ts - (ts * potonganhargo) + (ts * pajak);
  } else {
    tyhd = ts;
  }

  document.getElementById("fwao1").innerHTML = mtd;
  document.getElementById("fwao2").innerHTML = myd;
  document.getElementById("fwao3").innerHTML = "Rp" + `${tyhd}`;
}

const menutersedia = [
  { nmt: "Nasi Pecel", hargo: 12000, var: ["Pedas Banget", " Pedas", " Original"] },
  { nmt: "Nasi Jagung", hargo: 10000, var: ["Pedas Banget", " Pedas", " Original"] },
  { nmt: "Nasi Ayam", hargo: 15000, var: ["Pedas Banget", " Pedas", " Original"] },
  { nmt: "Nasi Krawu", hargo: 10000, var: ["Pedas Banget", " Pedas", " Original"] },
  { nmt: "Nasi Rendang", hargo: 15000, var: ["Pedas Banget", " Pedas", " Original"] },
  { nmt: "Nasi Lele", hargo: 13000, var: ["Pedas Banget", " Pedas", " Original"] }
];
const lvlpb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tampil(menutersedia, lvlpb, true);

// function object
function daftarHargaTampil(daftarHargaMenu) {
  let t = 0;
  let myd = "";
  for (let i = 0; i < daftarHargaMenu.length; i++) {
    myd += `<li>${daftarHargaMenu[i].jeneng}: Rp ${daftarHargaMenu[i].h}</li>`;
    t += daftarHargaMenu[i].h;
  }
  let pothar = 0.1;
  let bt = t - tampilDiskon(t, pothar);

  document.getElementById("fo1").innerHTML = myd;
  document.getElementById("fo2").innerHTML = "Rp " + t;
  document.getElementById("fo3").innerHTML = "Rp " + tampilDiskon(t, pothar);
  document.getElementById("fo4").innerHTML = "Rp " + bt;
}

const daftarHargaMenu = [
  { jeneng: "Es Kopi Susu", h: 10000 },
  { jeneng: "Roti Bakar", h: 25000 },
  { jeneng: "Tahu Telor", h: 15000 },
  { jeneng: "Nasi Goreng", h: 12000 },
];

daftarHargaTampil(daftarHargaMenu);

// function array
function dataTotal(jenis, rego) {
  for (let i = 0; i < jenis.length; i++) {
    document.getElementById("lmt" + (i + 1)).innerHTML = jenis[i] + ": Rp " + rego[i];
  }

  let fmbayar = rego.reduce((a, b) => a + b, 0);
  let diskon = 0.1;
  let tmbayar = fmbayar - tampilDiskon(diskon, fmbayar);

  document.getElementById("fa1").innerHTML = "Rp " + fmbayar;
  document.getElementById("fa2").innerHTML = "Rp " + tampilDiskon(diskon, fmbayar);
  document.getElementById("fa3").innerHTML = "Rp " + tmbayar;
}

const jenis = ["Es Kopi Susu", "Roti Bakar", "Tahu Telor", "Nasi Goreng"];
const rego = [10000, 25000, 15000, 12000];

dataTotal(jenis, rego);

// function 1
function tampilDiskon(diskon, total) { 
  return diskon * total;
}

function menampilkanTotal(listHargaMenu) {
  const listHargaMenu_1 = parseInt(listHargaMenu[0]);
  const listHargaMenu_2 = parseInt(listHargaMenu[1]);
  const listHargaMenu_3 = parseInt(listHargaMenu[2]);
  let total = listHargaMenu_1 + listHargaMenu_2 + listHargaMenu_3;
  let diskon = 0.1;
  let tydb = total - tampilDiskon(diskon, total);

  document.getElementById("f1").textContent = "Rp " + total;
  document.getElementById("f2").innerHTML = "Rp " + tampilDiskon(diskon, total);
  document.getElementById("f3").innerHTML = "Rp " + tydb;
}

const listHargaMenu = ["10000", "25000", "15000"];
menampilkanTotal(listHargaMenu);

// html table ke-2
const dt = {
  status: 200,
  message: "view data collection",
  data: [
    {
      id: 1,
      name: "Vega",
      age: 25,
      salary: 10000000,
    },
    {
      id: 2,
      name: "Yardan",
      age: 50,
      salary: 7000000,
    },
    {
      id: 3,
      name: "Taufiq",
      age: 64,
      salary: 3500000,
    },
    {
      id: 4,
      name: "Nathan",
      age: 14,
      salary: 3000000,
    },
    {
      id: 5,
      name: "Andreas",
      age: 29,
      salary: 20500000,
    },
    {
      id: 6,
      name: "Rafi",
      age: 44,
      salary: 5050000,
    },
    {
      id: 7,
      name: "Ilham",
      age: 53,
      salary: 9500000,
    },
    {
      id: 8,
      name: "Bram",
      age: 32,
      salary: 59050000,
    },
    {
      id: 9,
      name: "Fandi",
      age: 10,
      salary: 1505000,
    },
    {
      id: 10,
      name: "Riza",
      age: 78,
      salary: 30000000,
    },
  ],
};

const tabel2 = document.getElementById("tb2");
let totalgaji = 0;
let ageunder20 = 0;
let ageover40 = 0;
let age14 = dt.data[3].salary;

for (let i = 0; i < dt.data.length; i++) {
  const row = document.createElement("tr");
  const id = document.createElement("td");
  id.textContent = dt.data[i].id;
  row.appendChild(id);
  const name = document.createElement("td");
  name.textContent = dt.data[i].name;
  row.appendChild(name);
  const age = document.createElement("td");
  age.textContent = dt.data[i].age;
  row.appendChild(age);
  const salary = document.createElement("td");
  salary.textContent = "Rp " + dt.data[i].salary;
  row.appendChild(salary);
  tabel2.appendChild(row);

  totalgaji += dt.data[i].salary;

  if (dt.data[i].age >= 40) {
    ageover40 += dt.data[i].salary;
  } else if (dt.data[i].age < 20) {
    ageunder20;
  } else if (dt.data[i].age === 14) {
    age14;
  }
}

if (totalgaji > 1000000) {
  age14 = 1000000;
}

document.getElementById("totalgaji").textContent = `Total gaji keseluruhan = Rp ${totalgaji}`;
document.getElementById("pas14").textContent = `Total gaji yang usianya 14 tahun = Rp ${age14}`;
document.getElementById("under20").textContent = `Total gaji yang usianya < 20 tahun = Rp ${ageunder20}`;
document.getElementById("over40").textContent = `Total gaji yang usianya > 40 tahun = Rp ${ageover40}`;

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
    }
    
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