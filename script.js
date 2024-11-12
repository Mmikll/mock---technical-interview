const getWeather = async(cityName) => {
    const apikey = "e57f27c6abed63d3cd7645cd175d2d2a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;

    try {
        const data = await fetch(url);
        const weatherData = await data.json();
        if(weatherData?.code === '404') return console.log('there was an error')
        console.log(weatherData)

    } catch (error) {
        console.log("An Error Ocurred => " + error.message);
    }

    return {

    }
}

const form = document.querySelector("#inputCity");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const getCityName = e.target.querySelector(".nav input[name='city']").value;
    const {} = getWeather(getCityName);

}); 