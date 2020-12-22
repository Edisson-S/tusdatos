
const renderDetails =()=>{
let city= localStorage.getItem("Vone")
let title = document.getElementById("title")
let subtitle=document.getElementById("subtitle")
let img=document.getElementById("details-image")
let condition=document.getElementById("condition")
let temp=document.getElementById("temp")
let hum=document.getElementById("hum")
city=JSON.parse(city)
console.log("city es:",city)
title.innerHTML="Clima para la ciudad de " + city.name
subtitle.innerHTML="A continuaci&oacuten encuentra detalle sobre el estado del clima en " + city.name
condition.innerHTML=city.weather[0].description.substring(0,1).toUpperCase() +city.weather[0].description.substring(1,city.weather[0].description.length)
img.src=`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
temp.innerHTML="Temperatura: " + (city.main.temp/10).toFixed(2) +"&degC"
hum.innerHTML="Humedad Relativa: " + city.main.humidity + "%"
}

const evaluateHum= () =>{
let humCheckbox=document.getElementById("hum-checkbox").checked
let hum=document.getElementById("hum")
humCheckbox ? hum.className="details-description show" : hum.className="details-description hide"
}

const evaluateTemp= () =>{
    let tempCheckbox=document.getElementById("temp-checkbox").checked
    let temp=document.getElementById("temp")
    tempCheckbox ? temp.className="details-description show" : temp.className="details-description hide"
}

renderDetails()

