import axios from 'axios';
import { apiURL } from '../..';

export const getDataProduct = (page) => (dispatch)=>{
    dispatch({
        type:'FETCH PRODUCT',
        payload:true
    })
    axios.get(`${apiURL.url}/product-recommendation?${page}`)
    .then(res=>{
        const responseApi = res.data;
        dispatch({
            type:'SUCCESSED GET DATA PRODUCT',
            payload:responseApi.data
        })
    }).catch(err=>{
        if(err.request){
            dispatch({
                type:'FAILED GET DATA PRODUCT',
                payload:'Disconnect from server'
            })
        }
    })
}