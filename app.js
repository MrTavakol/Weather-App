let inputBox = document.getElementById('city-name')

inputBox.addEventListener("keypress", function(e){
	if(e.key === "Enter") {
		searchWeather();
    }
});

function searchWeather(){
	
	document.getElementById('loading').style.display = 'block'
	document.getElementById('display').style.display = 'none'
	document.getElementById('error').style.display = 'none'
	api_key = '14951c93f3d11e8ac8bed96dd90e8bc7'
	city = document.getElementById('city-name').value
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
		.then((res) => res.json())
		.then((data) => displayWeather(data))
		
		.catch((err) => displayError())


	function displayWeather(data){
		name = data.name
		temp = data.main.temp
		icon = data.weather[0].icon
		weath = data.weather[0].description
		humid = data.main.humidity
		wind = data.wind.speed
		document.querySelector('#city').innerText = name
		document.querySelector('#temp').innerText = temp
		document.querySelector('#weath').innerText = weath
		document.querySelector('#humid').innerText = humid
		document.querySelector('#wind').innerText = wind
		document.querySelector('#city-name').value = ""
		document.querySelector('img').src = `http://openweathermap.org/img/wn/${icon}.png`
		document.getElementById('loading').style.display = 'none'
		document.getElementById('display').style.display = 'block'
		
	};
	
	function displayError(){
		document.getElementById('display').style.display = 'none'
		document.getElementById('error').style.display = 'block'
		document.getElementById('loading').style.display = 'none'
	};
};
