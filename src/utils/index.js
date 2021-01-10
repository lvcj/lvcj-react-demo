let sand_box_rawAppendChild = null
let sand_box_rawRemoveChild = null

export const clear = ()=>{
    HTMLElement.prototype.appendChild = sand_box_rawAppendChild;
    HTMLElement.prototype.removeChild = sand_box_rawRemoveChild;

    sand_box_rawAppendChild = null
    sand_box_rawAppendChild = null
}

export const changeElement = ()=>{
    sand_box_rawAppendChild = HTMLElement.prototype.appendChild
    sand_box_rawRemoveChild = HTMLElement.prototype.removeChild

    HTMLElement.prototype.appendChild = (dom)=>{
        if(window.__POWERED_BY_QIANKUN__ && window.container){
          return sand_box_rawAppendChild.call(window.container, dom)
          //return window.containerElement.appendChild(dom);
        }
        //return sand_box_rawAppendChild.call(self, dom)
        return sand_box_rawAppendChild(dom)
      }
      
    HTMLElement.prototype.removeChild = (dom)=>{
        if(window.__POWERED_BY_QIANKUN__ && window.container){
          return sand_box_rawRemoveChild.call(window.container, dom)
          //return window.container.removeChild(dom);
        }
        return sand_box_rawRemoveChild(dom)
    }
}
