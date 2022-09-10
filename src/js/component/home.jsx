import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [onColor, setOnColor] = useState(1)    
  return (
    <div className="traffic-light d-flex justify-content-center">
      <div className="bg-dark p-3">
        <div className={`Light ${onColor === 1 ? "red" : "off"}`} onClick={()=>setOnColor(1)} />
        <div className={`my-3 Light ${onColor === 2 ? "yellow" : "off"}`} onClick={()=>setOnColor(2)} />
        <div className={`Light ${onColor === 3 ? "green" : "off"}`} onClick={()=>setOnColor(3)} />
      </div>
    </div>
  );
};

export default Home;
