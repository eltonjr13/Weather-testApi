// src/controllers/weatherController.js
const axios = require('axios');

exports.getWeather = async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        console.log(`Requesting weather data for city: ${city}`);
        const response = await axios.get(url);
        const data = response.data;
        console.log('Weather data received:', data);
        res.status(200).json({
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
};
