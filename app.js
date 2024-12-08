
        const API_KEY = "b5bcd86a39fe4b8973dc432c0431a2ea";

        let inputfield = document.getElementById("inputfield");
        let showWeather = document.getElementById("showWeather");

        let searchBtn = async () => {
            const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${inputfield.value}&appid=${API_KEY}`;
            const fetchData = await fetch(api_url);
            const response = await fetchData.json();

            if (response.cod === "404") {
                alert("City not found. Please try again!");
                return;
            }
            console.log(response);
            return showData(response);
        }

        let showData = (data) => {
            const tempCelsius = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            showWeather.innerHTML = `
                <div class="weather-card">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
                    <div class="card-body">
                        <h1 class="temperature">${tempCelsius} °C</h1>
                        <h2 class="city-name">${data.name}, ${data.sys.country}</h2>
                        <p class="weather-description">${data.weather[0].description}</p>
                    </div>
                </div>
            `;
        }
    