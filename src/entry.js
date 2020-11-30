import React, { useEffect, useState } from "react"
import "./index.scss";
export default function Entry(){
    const aa = ()=>{
        console.log("aaa===>>>>>")
        alert(1111)
    }
    return <div className="entry-wrap" onClick={aa}>entry hello</div>
}

