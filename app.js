// async function getWeather() {
//     const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1")
//     const data = await response.json()
//     return data
// }




 
const section = document.querySelector(".Weather")

const getWeather = async () =>{
    let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1")
    const data = await response.json()
    return data
}


const loadData = async () =>{
    const valuesWeather = await getWeather()
    console.log(valuesWeather)
    section.innerHTML = `
        <h3>${valuesWeather.current.temperature_2m}${valuesWeather.current_units.temperature_2m}</h3>
    `

}

loadData()