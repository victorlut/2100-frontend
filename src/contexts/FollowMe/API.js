import axios from 'axios'

export default function API(host,channel,method='post'){
  let token
  const call = async (action,...args) => {
    const options = {
      method,
      url:`${host}/${channel}/${action}`,
      data:args,
      json:true,
    }
    if(token){
      options.headers = {}
      options.headers['Authorization'] = 'Bearer ' + token
    }
    return axios(options).then(result=>{
      return result.data
    }).catch(err=>{
      console.log('followme api error:',action,channel,err);
      throw err
    })
  }
  function setToken(t){
    token = t
  }

  return {
    call,
    token,
    setToken
  }
}