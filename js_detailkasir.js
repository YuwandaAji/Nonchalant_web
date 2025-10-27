const buttons = document.querySelectorAll('.btn-group .btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // hapus status aktif dari semua tombol
    buttons.forEach(b => b.classList.remove('active'));

    // kasih status aktif ke tombol yang diklik
    btn.classList.add('active');

    // jalankan efek sesuai tombol
    if (btn.id === "btn-prep") {
      window.print(); // efek kayak "Print Nota"
      console.log("Pesanan sedang disiapkan...");
    }
    if (btn.id === "btn-delivery") {
      console.log("Pesanan sedang diantar...");
    }
    if (btn.id === "btn-done") {
      console.log("Pesanan selesai ");
    }
  });
});