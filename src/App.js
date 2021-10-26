import data from "./data.json";
import "./App.css";
import { useEffect, useState } from "react";
import EventBlock from "./eventBlock/eventBlock";

function App() {
  const [events, setEvents] = useState(data.events.slice(0, 5).reverse());

  useEffect(() => {
    let position = 5;
    setInterval(() => {
      setEvents((prev) => {
        const current = [...prev];
        current.unshift(data.events[position]);
        current.length = 5;
        return current;
      });
      position = (position + 1) % data.events.length;
    }, 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Time Line</h3>
      </header>
      <div className="timeline">
        {events.map((cur, index) => (
          <EventBlock key={index} event={cur} even={index % 2} />
        ))}
      </div>
    </div>
  );
}

export default App;
