
document.getElementById('weatherForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const city = document.getElementById('cityInput').value;
    const response = await fetch(`/api/weather/${city}`);
    const data = await response.json();
    
    if (response.ok) {
        document.getElementById('cityName').textContent = data.city;
        document.getElementById('temperature').textContent = `Temperature: ${data.temperature}°C`;
        document.getElementById('description').textContent = `Description: ${data.description}`;
        document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
        document.getElementById('weatherResult').classList.remove('hidden');
    } else {
        alert(data.error);
    }
});
