const   searchbtn=document.getElementById("search")
searchbtn.addEventListener('click',()=>{
let inputCountry=document.getElementById("searchCountry").value;
const   url=`https://restcountries.com/v3.1/name/${inputCountry}?fullText=true`
fetch(url).then(res=>res.json()).then(data=>{
    const display=document.getElementById("display");
    console.log(data[0])
    const name=data[0].name.common;
    const name1=data[0].name.official;
    const capital=data[0].capital[0];
    const continents=data[0].continents;
    const image =data[0].flags.png
   const area=data[0].area+" Square km";

    display.innerHTML=`
    <h1>${name}</h1>
    <img src="${image}" alt="">
    <h5>Offician name : ${name1}</h5>
    <h3>Continents : ${continents}</h3>
    <h3>Area : ${area}</h3>
    <h3>Capital : ${capital}</h3>
    <b></b>
    <h2></h2>`



})

})