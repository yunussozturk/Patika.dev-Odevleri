let ad = prompt("Adınız nedir ?")

let adiniz = document.querySelector("#myName")
adiniz.innerHTML = ad


let tarih = new Date();
const days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];
let day = days[tarih.getDay()];
let saat = document.querySelector("#myClock")
saat.innerHTML = `${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${day}`