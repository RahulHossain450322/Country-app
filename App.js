const container = document.querySelector('.country-container');
const input = document.querySelector('.input');
let allCountry = [];
input.addEventListener('keyup',(e)=>{
    let value = e.target.value;
    console.log(value)
})

const makeRequest =async(url)=>{
    const res = await fetch(url);
    const data = await res.json();
    return data;
}




const getData = async ()=>{
    
    const countrys = await makeRequest("https://restcountries.com/v3.1/all");
    countrys.map((country)=>{
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML= `
            <img class='flagImg' src='${country.flags.png}' alt='Images'/>
            <h1 class='title'>Name: ${country.name.common} </h1>
            <h2 class='title'>Area: ${country.area} </h2>
            <h2 class='title'>Capital: ${country.capital} </h2>
            <h2 class='title'>Region: ${country.region} </h2>
            <h2 class='title'>Population: ${country.population} </h2>
            
        `;
        container.appendChild(card)
        allCountry.push(country)
    })
    
}
getData();