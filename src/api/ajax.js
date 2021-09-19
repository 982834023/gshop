// ajax请求函数模块  返回值：promise对象(异步返回的数据是：response.data
import axios from "axios";
export default function ajax(url ,data={},type='GET'){

    return new Promise(function (resolve,reject){//接受函数的函数叫高阶函数
    //执行异步Ajax请求
      let promise

      if (type === 'GET') {
// 准备 url query 参数数据
        let dataStr = '' //数据拼接字符串
        Object.keys(data).forEach(key => {
          dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== '') {
          dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
          url = url + '?' + dataStr
        }
        //发送 get 请求
        promise = axios.get(url)
      } else {
        // 发送 post 请求
        promise = axios.post(url, data)
      }
      promise.then(function (response){
    //成功了调用resolve（）
        resolve(response.data)
      }).catch(function (error){
        reject(error)
      })
    //成功了调用resolve（）
    })

    // promise.then(response => {
    //   resolve(response.data)//成功的回调
    // })
    //   .catch(error => {
    //     reject(error)//失败的回调
    //   })

}
