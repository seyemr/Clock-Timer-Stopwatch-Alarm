// zaman.js

// Sayfa tamamen yüklendiğinde çalışacak kodlar
window.addEventListener('DOMContentLoaded', function () {
    // Saat dilimini güncelleyen fonksiyonu her saniye çağır
    setInterval(updateClock, 1000);
});

// Saati güncelleyen fonksiyon
function updateClock() {
    // Şu anki tarih ve saat bilgisini al
    var now = new Date();

    // Saati, dakikayı ve saniyeyi al
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // AM/PM formatına göre saat dilimini ayarla
    // var ampm = hours >= 12 ? 'PM' : 'AM';

    // 12 saatlik formata çevir
    hours = hours % 24;

    // Saat, dakika ve saniye değerlerini güncelle
    document.getElementById('hour').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = ampm;
}