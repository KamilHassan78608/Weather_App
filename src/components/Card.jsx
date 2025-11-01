import { Cloud } from "lucide-react";
import SearchBar from "./ui/SearchBar";
import SmallBoxes from "./ui/SmallBoxes";

const Card = () => {
  // Example data — you can later fetch this from an API
  const smallBoxData = [
    { title: "Humidity", subtitle: "70%" },
    { title: "Wind", subtitle: "12 km/h" },
    { title: "Pressure", subtitle: "1008 hPa" },
    { title: "Visibility", subtitle: "10 km" },
    { title: "Sunrise", subtitle: "6:45 AM" },
    { title: "Sunset", subtitle: "5:55 PM" },
    { title: "UV Index", subtitle: "3 Moderate" },
    { title: "Clouds", subtitle: "Scattered" },
  ];

  return (
    <div className="card-background">
      {/* City and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="weather-title">London</h1>
          <h1 className="weather-subtitle">Scattered Clouds</h1>
        </div>
        <SearchBar />
      </div>

      {/* Temperature Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <div className="text-center md:text-left">
          <h1 className="weather-title">23°C</h1>
          <h1 className="weather-subtitle">Feels like 13°C</h1>
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
