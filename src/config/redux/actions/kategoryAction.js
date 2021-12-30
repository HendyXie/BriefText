import axios from 'axios';
import { apiURL } from '../..';

export const getDataKategory = () => (dispatch)=>{
    dispatch({
        type:'FETCH KATEGORY',
        payload:true
    })
    axios.get(`${apiURL.url}/utility/home/box-category?with_staple=true`)
    .then(res=>{
        const responseApi = res.data;
        dispatch({
            type:'SUCCESSED GET DATA KATEGORY',
            payload:responseApi.data
        })
    }).catch(err=>{
        if(err.request){
            dispatch({
                type:'FAILED GET DATA KATEGORY',
                payload:'Disconnect from server'
            })
        }
    })
}