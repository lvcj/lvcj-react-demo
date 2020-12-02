import React from "react";
import ReactDOM from "react-dom"
import Entry from "./entry"
import { history as broswerHistory } from "~/store"

if(!window.__POWERED_BY_QIANKUN__){
    console.log("not qiankun")
    ReactDOM.render(<Entry />, document.getElementById("root"))
}
export async function bootstrap() {
    console.log("[lvcj-react-demo] react app bootstraped", broswerHistory)
}
  
export async function mount(props) {
    console.log("[lvcj-react-demo] props from main framework", broswerHistory)
    broswerHistory.location.pathname = location.pathname
    return ReactDOM.render(<Entry />, document.getElementById("root"))
}
  
export async function unmount() {
    // 确保子应用切换时，销毁 Toast 动态生成的 div
    Toast.hide()
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
}
  