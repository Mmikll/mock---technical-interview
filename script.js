const getWeather = async(cityName) => {
    if (cityName.length <= 3) {
        Swal.fire({
            icon: "error",
            title: "City Name Is Too Short",
            text: "should be at least 4 letters",
        });
        return;
    }
    const apikey = "e57f27c6abed63d3cd7645cd175d2d2a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;

    try {
        const data = await fetch(url);
        const weatherData = await data.json();
        if(weatherData?.cod === '404') throw new Error('there was an error') 
        
        const { 
            name: city, 
            weather :[{ description } = {}] = [],  
            main : { humidity, feels_like: temperature} = {}, 
            wind : {speed : windSpeed } = {}, 
            sys : {country: icon} = {} 
        } = weatherData;

        //here I struggle a lot, bcz I wanted to return the values from this scope outside of it, now i realize it was bcz of the scope
    return {
        description,
        icon,
        temperature,
        humidity,
        windSpeed,
        city,
    }

    } catch (error) {
        console.log(error?.message);
        Swal.fire({
            icon: "error",
            title: "City Wasn't Found",
            text: "Try another city",
        });
    }

}

const tempChanger = (temp) => {
    const celciusTemp = Math.round(temp - 273.15) 
    return celciusTemp
}

const form = document.querySelector("#inputCity");
const data = document.querySelector('.weather--section')
const temp = document.querySelector('.weather--temp')
const desc = document.querySelector('.weather--desc')


form.addEventListener("submit", async(e) => {
    e.preventDefault();
    const getCityName = e.target.querySelector(".nav input[name='city']").value;
    const {
        description,
        icon,
        temperature,
        humidity,
        windSpeed,
        city,
    } =  await getWeather(getCityName)
    const celciusTemp = tempChanger(temperature)
    data.innerHTML = `The current weather in ${city} features ${description}.`
    ;
    temp.innerHTML = `The Average Temperature Is ${celciusTemp}°C`;
    desc.innerHTML = `Humidity: ${humidity}% WindSpeed: ${windSpeed}m/s`;
}); 
