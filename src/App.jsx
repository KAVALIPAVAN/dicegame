import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Score from "./components/Score";
import Rolldice from "./components/Rolldice";
function App() {
  const [selected, setselected] = useState();
  const [number, setnumber] = useState(1);
  const [points, setpoints] = useState(0);

  const num=(min, max)=> {
    if(!selected){return};

    const newnumber=(Math.floor(Math.random() * (max - min) + min));
    // useEffect(()=>{setnumber(newnumber)},[])
    setnumber(newnumber);

    if(selected===newnumber){
      setpoints((prev)=>prev+selected);
    }
    else{
      setpoints((prev)=>prev-2);
    }
    setselected(null);

  }
  
  
  return <>
  <div className="flex  justify-between align-middle items-center p-4">
    <Score points={points}/>
    <Button selected={selected} setselected={setselected}/>  
  </div>
    <Rolldice num={num} number={number}/>
    </>
}

export default App;
