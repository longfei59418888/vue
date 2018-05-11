import axios from "axios"
import config from 'src/config'
var instance = axios.create({
  baseURL: config.baseURL, //
  transformResponse:[function (data) {}],//处理返回数据
  headers: {'X-Requested-With': 'XMLHttpRequest'},//头信息
})
export async function get(options) {
  let { url, params, deal } = options
  let retult = null;
  await instance.get(url,{params},{
    headers:{}
  }).then((data)=>{
    retult = data
  }).catch((err)=>{
    retult = err;
  })
  return retult
}
