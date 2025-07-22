import { useState, useEffect } from 'react';
import { Laugh, Brain, Calendar, HelpCircle } from 'lucide-react';
import './App.css';

const InfoCard = ({ icon, title, text }) => {
  return (
    <div
      className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/80 shadow-2xl"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-2 rounded-lg">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
      </div>
      <p className="text-slate-300 text-lg leading-relaxed">{text}</p>
    </div>
  );
};

function App() {
  const [joke, setJoke] = useState({ text: 'Loading...' });
  const [fact, setFact] = useState({ text: 'Loading...' });
  const [historyEvent, setHistoryEvent] = useState({ text: 'Loading...' });
  const [advice, setAdvice] = useState({ text: 'Loading...' });

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: { 'Accept': 'application/json' }
        });
        const data = await response.json();
        setJoke({ text: data.joke });
      } catch (error) {
        console.error("Failed to fetch dad joke:", error);
        setJoke({ text: 'Why did the scarecrow win an award? Because he was outstanding in his field!' });
      }
    };

    // Fetch Useless Fact
    const fetchFact = async () => {
      try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
        const data = await response.json();
        setFact({ text: data.text });
      } catch (error) {
        console.error("Failed to fetch fact:", error);
        setFact({ text: "A small child could swim through the veins of a blue whale." });
      }
    };

    // Fetch History Event
    const fetchHistoryEvent = async () => {
      try {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const response = await fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`);
        const data = await response.json();
        const event = data.events[Math.floor(Math.random() * data.events.length)];
        setHistoryEvent({ text: `${event.year}: ${event.description}` });
      } catch (error) {
        console.error("Failed to fetch history event:", error);
        setHistoryEvent({ text: "1955: The first Guinness Book of World Records is published." });
      }
    };

    // Fetch Advice
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice({ text: data.slip.advice });
      } catch (error) {
        console.error("Failed to fetch advice:", error);
        setAdvice({ text: "Always double-check your code." });
      }
    };

    fetchJoke();
    fetchFact();
    fetchHistoryEvent();
    fetchAdvice();
  }, []);

  const items = [
    { icon: <Laugh size={24} className="text-white" />, title: "Dad Joke", text: joke.text },
    { icon: <Brain size={24} className="text-white" />, title: "Useless Fact", text: fact.text },
    { icon: <Calendar size={24} className="text-white" />, title: "On This Day", text: historyEvent.text },
    { icon: <HelpCircle size={24} className="text-white" />, title: "Random Advice", text: advice.text },
  ];

  return (
    <div className="bg-slate-900 min-h-screen w-full font-sans text-white p-4 sm:p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 via-transparent to-pink-900/50 animate-pulse" 
           style={{ animationDuration: '10s' }}/>
      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              The Daily Dose
            </h1>
            <p className="text-lg text-slate-400">Your daily serving of random thoughts.</p>
        </div>
        {items.map((item, index) => (
          <InfoCard key={index} icon={item.icon} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
