function setClock() {
  const dayName = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const now = new Date();
  const years = now.getFullYear();
  const date = now.getDate();
  const month = now.getMonth();
  const jam = now.getHours();
  const menit = now.getMinutes();
  const detik = now.getSeconds();
  const day = dayName[now.getDay()];

  document.getElementById("hari").textContent = `${day}`;
  document.getElementById("years").textContent = `${years}`;
  document.getElementById("month").textContent = `${month}`;
  document.getElementById("date").textContent = `${date}`;
  document.getElementById("jam").textContent = `${jam}`;
  document.getElementById("menit").textContent = `${menit}`;
  document.getElementById("detik").textContent = `${detik}`;
}
setInterval(setClock, 1000);
