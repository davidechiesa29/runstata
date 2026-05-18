import '../styles/home.css';

function Home() {
  return (
    <>
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h1 id="logo"> RunStata </h1>
        <p id="catchline"> Track your runs. Analyze your stats. </p>
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
