import "../styles/activity.css"


interface ActivityProps {
  name: string;
  date: string;
  time: string;
  type: string;
  distance: string;
  pace: string;
  duration: string;
}

export default function Activity(props: ActivityProps) {

  const runGradients: Record<string, string> = {
    Easy: "linear-gradient(to right, #ffffff, #d8f0c8)",      // soft green
    Workout: "linear-gradient(to right, #ffffff, #ffe0b3)",   // soft orange
    Long: "linear-gradient(to right, #ffffff, #bfe4ff)",      // soft blue
    Race: "linear-gradient(to right, #ffffff, #ffd1d1)"       // soft red
  };

  return <div id="activity" style={{background: runGradients[props.type] }}>
    <p id="activity-title">{props.name}  <span id="date"> • {props.date} • {props.time} </span></p>
    <div style={{display: "flex"}}>
      <div className="stat"> 
        <p className="stat-label"> Distance </p>
        <p className="stat-info"> {props.distance} </p>
      </div>
      <div className="stat"> 
        <p className="stat-label"> Time </p>
        <p className="stat-info"> {props.duration} </p>
      </div>
      <div className="stat"> 
        <p className="stat-label"> Pace </p>
        <p className="stat-info"> {props.pace} </p>
      </div>
      <div className="stat"> 
        <p className="stat-label"> Type </p>
        <p className="stat-info"> {props.type} </p>
      </div>
    </div>
  </div>
}