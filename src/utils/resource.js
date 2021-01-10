//实现new

function _new(){
    const object = new Object();
    const Con = [].shift().call(arguments)
    object.__proto__ = Con.prototype;
    let result = Con.apply(obj, arguments);
    return typeof result === 'object' ? result:obj;
}


