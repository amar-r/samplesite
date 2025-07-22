import { useState, useEffect } from 'react';
import './App.css';

const getBrowserName = (userAgent) => {
  if (userAgent.includes("Firefox/")) return "Mozilla Firefox";
  if (userAgent.includes("SamsungBrowser/")) return "Samsung Internet";
  if (userAgent.includes("Opera/") || userAgent.includes("OPR/")) return "Opera";
  if (userAgent.includes("Trident/")) return "Microsoft Internet Explorer";
  if (userAgent.includes("Edge/")) return "Microsoft Edge (Legacy)";
  if (userAgent.includes("Edg/")) return "Microsoft Edge (Chromium)";
  if (userAgent.includes("Chrome/")) return "Google Chrome";
  if (userAgent.includes("Safari/")) return "Apple Safari";
  return "Unknown";
};

function App() {
  const [joke, setJoke] = useState({ setup: 'Loading a dad joke...', punchline: '' });
  const [weather, setWeather] = useState(null);
  const [visitorData, setVisitorData] = useState({});

  useEffect(() => {
    // Fetch Dad Joke
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        setJoke({
          setup: data.joke,
          punchline: '', // icanhazdadjoke provides the whole joke in one line
        });
      } catch (error) {
        console.error("Failed to fetch dad joke:", error);
        setJoke({ setup: 'Why did the scarecrow win an award?', punchline: 'Because he was outstanding in his field!' });
      }
    };

    // Fetch Weather
    const fetchWeather = (latitude, longitude) => {
      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit`;
      fetch(weatherURL)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
        })
        .catch(error => console.error("Failed to fetch weather:", error));
    };

    // Get Location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);

            try {
              const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
              const geoData = await geoResponse.json();
              if (geoData && geoData.address) {
                const locationName = [
                  geoData.address.city || geoData.address.town || geoData.address.village,
                  geoData.address.state,
                  geoData.address.country
                ].filter(Boolean).join(', ');
                
                setVisitorData(prevData => ({
                  ...prevData,
                  location: locationName,
                }));
              }
            } catch (e) {
              console.error("Failed to fetch reverse geocode data:", e);
            }
          },
          (error) => {
            console.error("Error getting location: ", error);
            // Don't fetch weather if location is denied
          }
        );
      }
    };

    // Fetch Visitor Data
    const fetchVisitorData = async () => {
      const data = {};
      try {
        const ipResponse = await fetch('http://ip-api.com/json');
        const ipData = await ipResponse.json();
        data.ip = ipData.query;
        data.location = `${ipData.city}, ${ipData.country}`; // This will be the fallback
        data.isp = ipData.isp;
      } catch (e) { console.error("Failed to fetch IP data:", e) }

      data.os = navigator.platform;
      data.browser = getBrowserName(navigator.userAgent);
      data.resolution = `${window.screen.width}x${window.screen.height}`;
      data.language = navigator.language;
      data.dnt = navigator.doNotTrack === "1" ? "Enabled" : "Not Enabled";

      setVisitorData(data);
    };

    fetchJoke();
    getLocation();
    fetchVisitorData();
  }, []);

  const getWeeklyHigh = (daily) => {
    if (!daily || !daily.temperature_2m_max) return null;
    return Math.max(...daily.temperature_2m_max);
  };

  const getWeeklyLow = (daily) => {
    if (!daily || !daily.temperature_2m_min) return null;
    return Math.min(...daily.temperature_2m_min);
  };

  return (
    <div className="bg-gray-100 dark:bg-black min-h-screen flex items-center justify-center p-6 text-center">
      <div className="bg-white dark:bg-gray-900 p-8 sm:p-12 rounded-2xl shadow-2xl max-w-lg w-full transform hover:scale-105 transition-transform duration-500 ease-in-out border border-gray-200 dark:border-gray-800">
        <div className="space-y-6">
          {weather && weather.current_weather && weather.daily && (
            <div className="flex justify-around items-center text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-4">
              <div className="text-center">
                <p className="text-sm">Now</p>
                <p className="font-bold text-lg">{weather.current_weather.temperature}°F</p>
              </div>
              <div className="text-center">
                <p className="text-sm">High</p>
                <p className="font-bold text-lg">{getWeeklyHigh(weather.daily)}°F</p>
              </div>
              <div className="text-center">
                <p className="text-sm">Low</p>
                <p className="font-bold text-lg">{getWeeklyLow(weather.daily)}°F</p>
              </div>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-gray-800 dark:text-white pt-4">
            Look at what you're giving away to be sold
          </h1>
          <p className="text-md sm:text-lg text-gray-500 dark:text-gray-400">
            This is the data your browser freely shares with every site you visit. 
            It's collected, bundled, and sold to advertisers and data brokers.
          </p>
          <div className="pt-4">
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 animate-loading-bar"
                   style={{ backgroundSize: '200% 100%' }}></div>
            </div>
          </div>
          <div className="pt-6 text-left border-t border-gray-200 dark:border-gray-800">
            <p className="text-md text-gray-600 dark:text-gray-400">{joke.setup}</p>
            <p className="text-md font-bold text-gray-800 dark:text-white mt-2">{joke.punchline}</p>
          </div>

          {weather && weather.latitude && weather.longitude && (
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <iframe
                title="User Location"
                width="100%"
                height="200"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                className="rounded-lg"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${weather.longitude - 0.02},${weather.latitude - 0.01},${weather.longitude + 0.02},${weather.latitude + 0.01}&layer=mapnik&marker=${weather.latitude},${weather.longitude}`}
              ></iframe>
            </div>
          )}

          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-left">
            <h2 className="text-md font-bold text-gray-800 dark:text-white mb-2">...and this is what you're sharing:</h2>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
              {visitorData.ip && <li><strong>IP Address:</strong> {visitorData.ip}</li>}
              {visitorData.location && <li><strong>Approx. Location:</strong> {visitorData.location}</li>}
              {visitorData.isp && <li><strong>ISP:</strong> {visitorData.isp}</li>}
              {visitorData.os && <li><strong>Operating System:</strong> {visitorData.os}</li>}
              {visitorData.browser && <li><strong>Browser:</strong> {visitorData.browser}</li>}
              {visitorData.resolution && <li><strong>Screen Resolution:</strong> {visitorData.resolution}</li>}
              {visitorData.dnt && <li><strong>"Do Not Track":</strong> {visitorData.dnt}</li>}
            </ul>
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-gray-800 text-left">
            <h2 className="text-md font-bold text-gray-800 dark:text-white mb-2">How to Protect Yourself</h2>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                <strong>Use a VPN:</strong> A good VPN masks your IP address and location.
                <a href="https://www.privacyguides.org/en/vpn/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">Learn more</a>.
              </li>
              <li>
                <strong>Use a Private Browser:</strong> Browsers like Brave or Firefox (with privacy settings) can block trackers and reduce fingerprinting.
                <a href="https://www.privacyguides.org/en/desktop-browsers/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">See options</a>.
              </li>
              <li>
                <strong>Block Trackers:</strong> Extensions like uBlock Origin and Privacy Badger stop trackers from following you across the web.
                <a href="https://www.eff.org/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline ml-2">EFF's Guide</a>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
