import "./eventBlock.css";

function EventBlock({ event, even }) {
  return (
    <div className={`block ${even && "block--right"}`}>
      <div className="event">
        <div className="time-box">
          {new Date(event.time).toLocaleTimeString().slice(0, 5)}
        </div>
        <div className="text">{event.title}</div>
        <div className="text">{event.description}</div>
      </div>
      <div className="steam">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default EventBlock;
