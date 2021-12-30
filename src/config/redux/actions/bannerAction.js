import axios from 'axios';
import { apiURL } from '../..';

export const getDataBanner = () => (dispatch)=>{
    dispatch({
        type:'FETCH BANNER',
        payload:true
    })
    axios.get(`${apiURL.url}/utility/home/banner-web`)
    .then(res=>{
        const responseApi = res.data;
        dispatch({
            type:'SUCCESSED GET DATA BANNER',
            payload:responseApi.data
        })
    }).catch(err=>{
        if(err.request){
            dispatch({
                type:'FAILED GET DATA BANNER',
                payload:'Disconnect from server'
            })
        }
    })
}