import config from 'src/config'
const prefixName = config.prefixName
// let sessionList = get('sessionList')?get('sessionList'):[]


export const set = (attr,data,timeOut)=>{
    data = data?JSON.stringify(data):null
    if(timeOut) sessionStorage.setItem(`${prefixName}_${attr}`,data,timeOut)
    else  sessionStorage.setItem(`${prefixName}_${attr}`,data,10000000)
    // if(attr!='sessionList') {
    //     if(sessionList.indexOf(attr) == -1) sessionList.push(attr)
    //     set('sessionList',sessionList)
    // }
}

export function get(attr){
    let data = sessionStorage.getItem(`${prefixName}_${attr}`);
    if(data == null || data == "" ) return null;
    else return JSON.parse(data)
}


export const clear = (attr)=>{
    sessionStorage.clear(`${prefixName}_${attr}`)
}


export const clearAll = ()=>{
  sessionStorage.clear()
    // sessionList.forEach((item)=>{
    //     sessionStorage.clear(`${prefixName}_${item}`)
    // })
}
