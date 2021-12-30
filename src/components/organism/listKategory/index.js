import { makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getDataKategory } from '../../../config/redux/actions/kategoryAction'
import { Kategory } from '../../molecules'

const ListKategory = () => {
    const style = makeStyles((theme)=>({
        root:{
            width:'100%',
            marginTop:'2%',
            height:'200px',
            // border:'1px solid black',
            display:'flex',
            justifyContent:'center'
        },
        paper:{
            display:'flex',
            justifyContent:'space-between',
            width:'85%',
            height:'200px',
            [theme.breakpoints.down('xs')]:{
                width:'90%',
                height:'170px'
            },
            position:'absolute',
            overflowX:'auto',
            scrollbarWidth:'thin',
            "&::-webkit-scrollbar":{
                height:'0.4rem'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#fac2',
                outline: '0.5px solid slategrey',
                borderradius:'5px'
            },
        }
    }))
    const classes = style();
    const {dataKategory} = useSelector(state => state.kategoryReducers);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getDataKategory());
    },[dispatch])
    return (
        <div className={classes.root}>
            <div className={classes.paper}>
                {dataKategory.map((kategory=>(
                    <Kategory key={kategory.category_id} label={kategory.category_name} icon={kategory.icon} id={kategory.category_id} category_slug={kategory.category_slug}/>
                )))}
            </div>
        </div>
    )
}

export default ListKategory
