import React, { useState } from "react";


function Button({selected,setselected}) {
    const arr=[1,2,3,4,5,6];
    
    
    // console.log(selected)
  return<>
  <div className="flex gap-4">
    {arr.map((value,i)=>(
    <button key={i} onClick={()=>setselected(value)} className={`border-2 cursor-pointer h-14 w-14 ${value===selected?' bg-black text-white':'bg-slate-50'}`} >{value}</button>))}
</div>

</> 
}

export default Button;
