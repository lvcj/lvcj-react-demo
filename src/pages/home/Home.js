import React from "react";

export default function Home(props){
    const click = ()=>{
        props.history.push("/about-react")
    }
    return <div onClick={click}>hello home reacts</div>
}