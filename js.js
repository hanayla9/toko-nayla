// js/script.js

function beliProduk(namaProduk) {
    const konfirmasi = confirm(`Apakah kamu yakin ingin membeli ${namaProduk}?`);
    if (konfirmasi) {
        alert(`Pembelian ${namaProduk} berhasil!`);
    } else {
        alert("Pembelian dibatalkan.");
    }
}
