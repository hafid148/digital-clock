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
  const day = dayName[now.getDay()];
  const date = now.getDate();
  const month = now.getUTCMonth();
  const years = now.getFullYear();

  const hours = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const tambah = (second / 60) * 360 + 90;
  const tambahMenit = (minute / 60) * 360 + 90;
  const tambahJam = (hours / 60) * 360 + 90;

  document.getElementById("shape3").style.transform = `rotate(${tambahJam}deg)`;

  document.getElementById("shape").style.transform = `rotate(${tambah}deg)`;
  document.getElementById(
    "shape2"
  ).style.transform = `rotate(${tambahMenit}deg)`;

  document.getElementById("day").textContent = `${day}`;
  document.getElementById("date").textContent = `${date}`;
  document.getElementById("month").textContent = `${month}`;
  document.getElementById("years").textContent = `${years}`;
  document.getElementById("jam").textContent = `${hours}`;
  document.getElementById("menit").textContent = `${minute}`;
  document.getElementById("detik").textContent = `${second}`;
}
setInterval(setClock, 1000);
