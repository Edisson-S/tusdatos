
const cities=[
    {
        name:"Bogotá",APIId:3688689
    },
    {
        name:"Medellín",APIId:3674962
    },
    {
        name:"Cali",APIId:3687925
    },
    {
        name:"Cartagena",APIId:3687238
    },
    {
        name:"Pasto",APIId:3672778
    },
    {
        name:"Bucaramanga",APIId:3688465
    },
    {
        name:"Villavicencio",APIId:3665900
    },
    {
        name:"Zipaquirá",APIId:3665542
    },
    {
        name:"Cúcuta",APIId:3685533
    },
    {
        name:"Barranquilla",APIId:3689147
    }
]

let ids=[];

let APIResponse;
const fetchAsync = async (url) =>{
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

const changeWindow = (city)=>{     
    localStorage.setItem("Vone",JSON.stringify(city))
    window.location.assign("./Description.html")
}

const searchElement=(value)=>{

    let items = document.getElementsByClassName("grid-item")
    items=[].slice.call(items)
    items.map((item)=>{
    if(!item.innerHTML.toLowerCase().includes(value.toLowerCase())){
        item.remove()
    }
        
    })
    
}

const clearCities = ()=>{
    let items = document.getElementsByClassName("grid-item")
    items=[].slice.call(items)
    items.map((item)=>{
        item.remove()
    })
}

const renderCities = (cities)=>{
let container = document.getElementById("container");

cities.map((city)=>{
    let item= document.createElement("div")
    item.className="grid-item font-item" 
    item.innerHTML=city.name
    item.onclick=()=>{changeWindow(city)}
    container.appendChild(item)
    let image = document.createElement("img")
    image.src=`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
    image.className="item-image"
    item.appendChild(image)
})
}

cities.map((city)=>{ids.push(city.APIId)})
fetchAsync(`http://api.openweathermap.org/data/2.5/group?id=${ids}&lang=es&appid=`).then(response=>{
    let element=document.getElementById("Loading")
    element.remove()
    APIResponse=response; 
    renderCities(response.list)})



let container = document.getElementById("container");
let item= document.createElement("h3")
item.id="Loading"
item.className="font-subtitle" 
item.innerHTML="Cargando..."
container.appendChild(item)


document.getElementById("search-box").addEventListener("change",()=>{clearCities();renderCities(APIResponse.list);searchElement(document.getElementById("search-box").value)})
// 
// 

