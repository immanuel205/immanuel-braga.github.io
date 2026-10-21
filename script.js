// 1. Sapaan sesuai jam
  (function(){
    var h = new Date().getHours();
    var s = h < 11 ? "Selamat pagi!" : h < 15 ? "Selamat siang!" : h < 18 ? "Selamat sore!" : "Selamat malam!";
    document.getElementById("greeting").textContent = s;
    document.getElementById("year").textContent = new Date().getFullYear();
  })();

  // 2. Tombol mode gelap / terang
  var root = document.documentElement, btn = document.getElementById("themeBtn");
  function setTheme(t){
    root.setAttribute("data-theme", t);
    btn.textContent = t === "dark" ? "Mode terang" : "Mode gelap";
    btn.setAttribute("aria-pressed", t === "dark");
    try { localStorage.setItem("theme", t); } catch(e){}
  }
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch(e){}
  setTheme(saved || "dark");
  btn.addEventListener("click", function(){
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  // 3. Validasi formulir
  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var pesan = document.getElementById("pesan").value.trim();
    var ok = true;
    document.getElementById("errNama").textContent = nama ? "" : "Nama wajib diisi.";
    document.getElementById("errEmail").textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Masukkan email yang valid, misalnya nama@email.com.";
    document.getElementById("errPesan").textContent = pesan.length >= 10 ? "" : "Pesan minimal 10 karakter.";
    ok = nama && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && pesan.length >= 10;
    var msg = document.getElementById("formMsg");
    if (ok) { msg.textContent = "Terima kasih, " + nama + "! Pesan kamu sudah tercatat."; this.reset(); }
    else { msg.textContent = ""; }
  });