import "./App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className=" px-10 md:px-50 lg:px-50">
      <div className="grid-background"></div>
      <Navbar />
      <MainPage />
    </div>
  )
}
