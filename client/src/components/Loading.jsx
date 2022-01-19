import React from "react";

import load from "../Assets/img/load.gif"

export default function Loading(){
    return <div style={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'}}>
        <img src={load} alt="Loading..."  style={{ width: "400px" }}/>
        <p>Sorry, No match found</p>
    </div>
}