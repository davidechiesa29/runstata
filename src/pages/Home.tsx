import '../styles/home.css';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  return (
    <>
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h1 id="logo"> RunStata </h1>
        <p id="catchline"> Track your runs. Analyze your stats. </p>
        <button id="getstarted" onClick={() => navigate("/activities")}> Get Started
          <FaArrowRight style={{ marginLeft: "8px" }} />
        </button>
      </div>
      <div id="triangleContainer">
        <div id="triangleLeft"></div>
        <div id="triangleRight"></div>
        <div id="triangle"></div>
      </div>
      
    </>
     

  );
};

export default Home;
