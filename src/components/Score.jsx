import React, { useState } from "react";

function Score({points}) {
  // console.log(selected);
  
  return <div className=" bg-slate-50 flex flex-col text-xl font-bold items-center">
    <h1>{points}</h1>
    <p>score</p></div>
    
}

export default Score;
