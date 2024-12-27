import React, { useState } from "react";

function Rolldice({num,number}) {
      
    
  return<>
   <div className="mt-11 h-full w-full flex align-middle justify-center ">
  <div className="p-5 flex flex-col justify-center">
    <img className=" w-1/2 " onClick={()=>num(1,7)} src={`src/components/img/dice_${number}.png`} alt="isjc" />
    <div className="ml-2"><p >click on the dice</p>
    {/* <h4>Number is {number}</h4> */}
    </div>
  </div>
  </div>
  </>
}

export default Rolldice;
