import "../public.path";
import React from "react";
import ReactDOM from "react-dom"
import { createBrowserHistory } from 'history';
import { setHistory  } from '~/store/historys';
const Entry1 = () => {
    return new Promise((resolve, reject) => {
        import(/* webpackChunkName: "Home" */ "./entry").then(AsyncComponent => {
                console.log('传送');
            resolve(AsyncComponent);
        });
    });
}

window.container = null
console.log("!window.__POWERED_BY_QIANKUN__ ===>>>", !window.__POWERED_BY_QIANKUN__)
if(!window.__POWERED_BY_QIANKUN__){
    console.log("not qiankun")
    setHistory(createBrowserHistory())
    Entry1().then(Component=>{
        ReactDOM.render(<Component.default />, document.getElementById("root"))
    })
}
export async function bootstrap(props) {
    console.log("[lvcj-react-demo] react app bootstraped",props)
}
export async function beforeMount(props){
    console.log(props)
}

export async function mount(props) {
    window.container = props.container;
    setHistory(props.history)
    
    const Entry = await Entry1()
    console.log("[lvcj-react-demo] props from main framework", props.history,props)
    props.history.location.pathname = location.pathname
    return ReactDOM.render(<Entry.default />, window.container ? window.container.querySelector('#root') : document.getElementById("root"))
}

export async function unmount(props) {
    // 确保子应用切换时，销毁 Toast 动态生成的 div
   // Toast.hide()
    ReactDOM.unmountComponentAtNode(window.container ? window.container.querySelector('#root'):document.getElementById("root"))
}
  