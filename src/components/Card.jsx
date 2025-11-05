import { useEffect, useState } from "react";
import { Cloud } from "lucide-react";
import SearchBar from "./ui/SearchBar";
import SmallBoxes from "./ui/SmallBoxes";

const Card = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(""); // For search input
  const API_KEY = "9923acc08c7c027d6e965eb28da9f12d"; // 🔑 Replace with your OpenWeatherMap API key

  // Fetch weather by coordinates (for user's current location)
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setLoading(false);
    }
  };

  // Fetch weather by city name
  const fetchWeatherByCity = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get user location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Location access denied:", error);
          // Default city fallback if denied
          fetchWeatherByCity("London");
        }
      );
    } else {
      fetchWeatherByCity("London");
    }
  }, []);

  // Handle search submission (from SearchBar)
  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeatherByCity(cityName);
  };

  if (loading) {
    return (
      <div className="card-background flex items-center justify-center text-gray-300 text-xl">
        Loading weather...
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="card-background text-center text-red-400">
        Could not load weather data.
      </div>
    );
  }

  const {
    name,
    main: { temp, feels_like, humidity, pressure } = {},
    wind: { speed } = {},
    visibility,
    weather,
    sys: { sunrise, sunset } = {},
    clouds: { all: cloudiness } = {},
  } = weatherData;

  const condition = weather?.[0]?.description || "N/A";

  const smallBoxData = [
    { title: "Humidity", subtitle: `${humidity}%` },
    { title: "Wind", subtitle: `${speed} km/h` },
    { title: "Pressure", subtitle: `${pressure} hPa` },
    { title: "Visibility", subtitle: `${visibility / 1000} km` },
    { title: "Sunrise", subtitle: new Date(sunrise * 1000).toLocaleTimeString() },
    { title: "Sunset", subtitle: new Date(sunset * 1000).toLocaleTimeString() },
    { title: "Clouds", subtitle: `${cloudiness}%` },
  ];

  return (
    <div className="card-background">
      {/* City and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="weather-title">{name}</h1>
          <h1 className="weather-subtitle capitalize">{condition}</h1>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Temperature Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <div className="text-center md:text-left">
          <h1 className="weather-title">{Math.round(temp)}°C</h1>
          <h1 className="weather-subtitle">Feels like {Math.round(feels_like)}°C</h1>
        </div>
        <Cloud size={100} strokeWidth={1.5} color="white" className="mt-5 md:mt-0" />
      </div>

      {/* Small Boxes Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {smallBoxData.map((box, index) => (
          <SmallBoxes key={index} title={box.title} subtitle={box.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default Card;
