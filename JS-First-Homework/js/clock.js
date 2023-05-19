let inputname =prompt("Adınızı Bahşeder misiniz: ")
let username = document.querySelector("#myName")
username.innerHTML=`${inputname}`
if (inputname.length > 0) {
    alert(`Çok güzel bir ismin var ${inputname}`)
}

function time(){
let dateData = new Date()
let hours = dateData.getHours()
let minutes=dateData.getMinutes()
let seconds=dateData.getSeconds()

let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
let dayName = days[dateData.getDay()]

let info =document.querySelector("#myClock")
info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`

}
setInterval(time,1000);