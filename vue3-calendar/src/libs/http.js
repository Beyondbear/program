import axios from 'axios'
import qs from 'qs'
import JUHE_APPKEY from '@/configs/keys'

const axiosPost = options => {
    axios.post(
        options.url,
        qs.stringify({
            ...options.data,
            key:JUHE_APPKEY
        }),
    ).then(res => {
        options.success(res.data)
    }).catch(err => {
        options.error(err)
    })
}

const axiosGet = options => {
    axios.get(
        options.url,
        {
            params:{
                ...options.data,
                key:JUHE_APPKEY
            }
        }
    ).then(res => {
        options.success(res.data)
    }).catch(err => {
        options.error(err)
    })
}

export {
    axiosPost,
    axiosGet
}