import '../styles/home.css';

function Home() {
  return (
    <>
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <h1 id="logo"> RunStata </h1>
        
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
