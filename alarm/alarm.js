// Alarm zamanlayıcısı değişkeni
var alarmTimer;

// Alarm sesi çalma fonksiyonu
function playAlarmSound() {
  var alarmSound = document.getElementById("alarm-sound");
  alarmSound.play();
}

// Alarm kurma işlemi
document.getElementById("set-alarm").addEventListener("click", function () {
  // Alarmı sıfırla
  clearTimeout(alarmTimer);

  // Alarm zamanını ayarla
  var hour = document.getElementById("hour").value;
  var minutes = document.getElementById("minutes").value;

  if (hour === "" || minutes === "") {
    alert("Lütfen saat ve dakika değerlerini girin.");
    return;
  }

  var currentHour = new Date().getHours();
  var currentMinutes = new Date().getMinutes();

  if (hour < currentHour || (hour == currentHour && minutes <= currentMinutes)) {
    alert("Geçmiş bir zamana alarm kuramazsınız.");
    return;
  }

  var alarmTime = new Date();
  alarmTime.setHours(hour);
  alarmTime.setMinutes(minutes);
  alarmTime.setSeconds(0);

  var timeToAlarm = alarmTime - new Date();

  alarmTimer = setTimeout(function () {
    alert("Alarm çaldı!");
    playAlarmSound(); // Zil sesini çal
  }, timeToAlarm);

  // Alarm durumunu güncelle
  document.getElementById("alarm-status").innerText = "Alarm Kuruldu: " + hour + ":" + minutes;
});

// Alarmı durdurma işlemi
document.getElementById("pause-alarm").addEventListener("click", function () {
  clearTimeout(alarmTimer);
  document.getElementById("alarm-status").innerText = "Alarm Durdu.";
});

// Alarmı temizleme işlemi
document.getElementById("clear-alarm").addEventListener("click", function () {
  clearTimeout(alarmTimer);
  document.getElementById("alarm-status").innerText = "Alarm Kurulmadı.";
});

// Alarmı durdurma işlemi
document.getElementById("pause-alarm").addEventListener("click", function () {
  clearTimeout(alarmTimer);
  document.getElementById("alarm-status").innerText = "Alarm Durdu.";
  pauseAlarmSound(); // Alarm sesini durdur
});

// Alarm sesini durdurma fonksiyonu
function pauseAlarmSound() {
  var alarmSound = document.getElementById("alarm-sound");
  alarmSound.pause();
  alarmSound.currentTime = 0;
}