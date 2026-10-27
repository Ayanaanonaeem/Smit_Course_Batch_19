
import { useState,useEffect } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

import {
  CloudSun,
  Droplets,
  Wind,
  Thermometer,
  MapPin,
  Sun,
  ChevronDown,
  Loader,
  Sunset
} from "lucide-react";

const cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Peshawar",
  "Quetta",
  "Mumbai",
  "Delhi",
  "Dubai",
  "London",
  "New York",
  "Toronto",
  "Sydney",
  "Berlin",
  "Istanbul",
  "Tokyo",
];

function App() {
  const [chosen, setChosen] = useState(cities[0]);
  const [weatherData,setWeatherData]=useState([])
  const [loading,setLoading]=useState(true)


  useEffect(() => {   
   const data= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chosen}&appid=${API_KEY}&units=metric`)
   .then((res)=>res.json())
   .then((res)=>{
    setLoading(false)
    setWeatherData(res)})
  }, [chosen])
  
  


const sunset=weatherData?.sys?.sunset*1000
const sunrise=weatherData?.sys?.sunrise*1000


console.log(weatherData);








  return (
    <main className="min-h-screen bg-[#edf0f8] px-4 py-8 text-[#333b50] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <header className="mb-12 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl shadow-[6px_6px_12px_#cbd0df,-6px_-6px_12px_#ffffff]">
              <CloudSun size={26} className="text-indigo-500" />
            </div>

            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
              Clima<span className="text-indigo-400">Cloud</span>
            </h2>
          </div>

          <div className="rounded-full px-3 py-2 text-xs font-semibold text-slate-500 shadow-[inset_3px_3px_6px_#d0d5e1,inset_-3px_-3px_6px_#ffffff] sm:px-4 sm:text-sm">
            Weather Dashboard
          </div>
        </header>

        {/* Heading */}
        <section className="mb-8">
          <p className="mb-3 text-[10px] font-extrabold tracking-[3px] text-indigo-400 sm:text-xs">
            YOUR PERSONAL WEATHER STATION
          </p>

          <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
            Weather, made
            <span className="block text-indigo-400 sm:inline">
              {" "}beautiful.
            </span>
          </h1>

          <p className="mt-4 text-sm text-slate-400 sm:text-base">
            Check the weather, wherever you are.
          </p>
        </section>

        {/* Main Weather Card */}
        <section className="rounded-[28px] border border-white/70 bg-[#edf0f8] p-5 shadow-[12px_12px_30px_#cfd3e0,-12px_-12px_30px_#ffffff] sm:rounded-[32px] sm:p-9">

          {/* City Selection */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-2xl shadow-[5px_5px_10px_#cfd3e0,-5px_-5px_10px_#ffffff]">
                <MapPin size={22} className="text-indigo-400" />
              </div>

              <div>
                <p className="mb-1 text-[10px] font-bold tracking-[2px] text-slate-400">
                  SELECTED LOCATION
                </p>
                <h2 className="text-2xl font-bold">{chosen}</h2>
              </div>
            </div>

            <label className="flex items-center gap-2 rounded-xl px-4 shadow-[inset_3px_3px_6px_#d0d5e1,inset_-3px_-3px_6px_#ffffff]">
              <select
                value={chosen}
                onChange={(e) => setChosen(e.target.value)}
                // className="w-full cursor-pointer appearance-none bg-transparent py-4 text-sm font-semibold text-slate-600 outline-none sm:w-36"
                // aria-label="Select city"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              
            </label>
          </div>

          {/* Main Weather Display */}
          {
            loading?(
              <h1>loading.....</h1>

            ):(

            <div>
          <div className="flex min-h-64 items-center justify-between gap-3 py-10 sm:px-3">
            <div className="min-w-0">
              <p className="mb-4 text-[10px] font-extrabold tracking-[2px] text-slate-400">
                CURRENT WEATHER
              </p>

              <div className="flex items-start">
                <div className="h-20 w-28 rounded-xl sm:w-36" />
                
                <span className="text-4xl font-medium text-indigo-300">
                 {weatherData.main?.temp} °C
                </span>
              </div>

              <h3 className="mt-2 text-lg font-bold text-slate-500 sm:text-xl">
                Weather Condition
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Feels like —{weatherData.main.feels_like}
              </p>
            </div>

            {/* Weather Illustration */}
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full shadow-[10px_10px_22px_#d0d4e1,-10px_-10px_22px_#ffffff] sm:h-52 sm:w-52">
              <div className="absolute h-24 w-24 rounded-full bg-amber-200/40 blur-2xl sm:h-36 sm:w-36" />

              <Sun
                size={80}
                strokeWidth={1.5}
                className="relative fill-amber-300 text-amber-500 sm:h-28 sm:w-28"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="mb-7 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          {/* Weather Details */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="rounded-3xl border border-white/60 p-5 shadow-[7px_7px_15px_#d1d5e2,-7px_-7px_15px_#ffffff] sm:p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl shadow-[inset_3px_3px_6px_#d0d5e1,inset_-3px_-3px_6px_#ffffff]">
                <Droplets size={23} className="text-sky-500" />
              </div>
              <p className="text-sm font-semibold text-slate-500">
                Humidity
              </p>
              <p className="text-sm font-semibold text-slate-500">
                {weatherData.main.humidity}
              </p>
              <div className="mt-3 h-8" />
              <p className="mt-2 text-xs text-slate-400">
                Air moisture
              </p>
              <p className="mt-2 text-xs text-slate-400">
                
              </p>
            </div>

            <div className="rounded-3xl border border-white/60 p-5 shadow-[7px_7px_15px_#d1d5e2,-7px_-7px_15px_#ffffff] sm:p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl shadow-[inset_3px_3px_6px_#d0d5e1,inset_-3px_-3px_6px_#ffffff]">
                <Wind size={23} className="text-teal-500" />
              </div>
              <p className="text-sm font-semibold text-slate-500">
                Wind Speed
              </p>
              <p className="text-sm font-semibold text-slate-500">
               {weatherData.main.pressure}
              </p>
              <div className="mt-3 h-8" />
              <p className="mt-2 text-xs text-slate-400">
                Wind conditions
              </p>
            </div>

            <div className="rounded-3xl border border-white/60 p-5 shadow-[7px_7px_15px_#d1d5e2,-7px_-7px_15px_#ffffff] sm:p-6">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl shadow-[inset_3px_3px_6px_#d0d5e1,inset_-3px_-3px_6px_#ffffff]">
                <Thermometer size={23} className="text-orange-400" />
              </div>
              <p className="text-sm font-semibold text-slate-500">
                Feels Like
              </p>
              <p className="text-sm font-semibold text-slate-500">
                  {weatherData.main.pressure}
              </p>
              <div className="mt-3 h-8" />
              <p className="mt-2 text-xs text-slate-400">
                Perceived temperature
              </p>
            </div>

          </div>
          </div>

            )
          }
          {/* Sunrise & Sunset */}
<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

  {/* Sunrise */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-[#edf0f8] p-6 shadow-[7px_7px_15px_#d1d5e2,-7px_-7px_15px_#ffffff] transition-all duration-300 hover:-translate-y-1">

    <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-orange-200/30 blur-2xl transition-all group-hover:bg-orange-200/50" />

    <div className="relative flex items-center justify-between gap-4">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Sun size={19} className="text-orange-400" />
          <p className="text-sm font-semibold text-slate-500">
            Sunrise
            
          </p>
        </div>

        <h3 className="text-3xl font-extrabold tracking-tight text-[#333b50]">
         {new Date(sunrise).toLocaleTimeString()}
          <span className="ml-2 text-sm font-semibold text-slate-400">
            AM
          </span>
        </h3>

        <p className="mt-2 text-xs text-slate-400">
          The day begins
        </p>
      </div>

      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl shadow-[inset_3px_3px_6px_#d0d5e1,inset_-3px_-3px_6px_#ffffff]">
        <Sun
          size={35}
          strokeWidth={1.5}
          className="text-orange-400"
        />
      </div>
    </div>

    <div className="relative mt-6 h-1.5 overflow-hidden rounded-full bg-[#e0e4ef] shadow-[inset_2px_2px_4px_#cfd3df,inset_-2px_-2px_4px_#ffffff]">
      <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-amber-200 to-orange-400" />
    </div>
  </div>

  {/* Sunset */}
  <div className="group relative overflow-hidden rounded-3xl border border-white/60 bg-[#edf0f8] p-6 shadow-[7px_7px_15px_#d1d5e2,-7px_-7px_15px_#ffffff] transition-all duration-300 hover:-translate-y-1">

    <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-indigo-200/40 blur-2xl transition-all group-hover:bg-indigo-200/60" />

    <div className="relative flex items-center justify-between gap-4">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <Sunset size={19} className="text-indigo-400" />
          <p className="text-sm font-semibold text-slate-500">
            Sunset
          </p>
        </div>

        <h3 className="text-3xl font-extrabold tracking-tight text-[#333b50]">
         {new Date(sunset).toLocaleTimeString()}
          <span className="ml-2 text-sm font-semibold text-slate-400">
            PM
          </span>
        </h3>

        <p className="mt-2 text-xs text-slate-400">
          The day comes to an end
        </p>
      </div>

      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl shadow-[inset_3px_3px_6px_#d0d5e1,inset_-3px_-3px_6px_#ffffff]">
        <Sunset
          size={35}
          strokeWidth={1.5}
          className="text-indigo-400"
        />
      </div>
    </div>

    <div className="relative mt-6 h-1.5 overflow-hidden rounded-full bg-[#e0e4ef] shadow-[inset_2px_2px_4px_#cfd3df,inset_-2px_-2px_4px_#ffffff]">
      <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-300 to-indigo-400" />
    </div>
  </div>

</div>
          
        </section>

        {/* Footer */}
        <footer className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
          <CloudSun size={17} className="text-indigo-400" />
          <span>ClimaCloud</span>
          <span>•</span>
          <span>Your weather, your way.</span>
        </footer>
      </div>
    </main>
  );
}

export default App;
