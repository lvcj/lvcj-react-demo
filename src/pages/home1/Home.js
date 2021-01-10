import React, {useRef} from "react";
import html2canvas from "html2canvas";
import {clear, changeElement} from "../../utils/index"
import "./index.scss"
import {EFCONFIG} from "react-load-on-demand"

export default function Home(props){
    const posterRef = useRef()
    const click = async ()=>{
        try{
            console.log(EFCONFIG)
           // changeElement()
            var opts = {
                useCORS: true,
                // scale: scale,
                // canvas: canvas,
                // logging: true,
                // width: width,
                // height: height
              }
            const base64 = await html2canvas(posterRef.current, opts).then(canvas =>
                canvas.toDataURL("image/jpeg", 0.8),
            )
            console.log(base64)
           // clear()
        }catch(e){
            clear()
            console.log("e=====>>>>", e)
        }
        
        // console.log("base64=====>>>>>>>", base64)
        // props.history.push('/react')
    }
    return <div>
        <div ref={posterRef} styleName="home-wrap">
            react home2
        </div>
        <div onClick={click}>
            <button>按钮</button>
        </div>
    </div>
}