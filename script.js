const getWeather = async(cityName) => {
    const apikey = e57f27c6abed63d3cd7645cd175d2d2a
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`

    try {
        const data = await fetchWeather(url);
        if( data.status !== 200) console.log('there was an error')

        console.log(data)
    } catch (error) {
        console.log('there was an error')
    }
}


const form = document.querySelector("#inputCity");

form.addEventListener("submit", (e) => {
    e.preventDefault;
    const getCityName = e.target.city.value;
    console.log(getCityName);
    alert("aler")
}); 