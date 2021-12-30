import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Product } from '../../molecules'

const ListProduct = () => {
    const style = makeStyles(()=>({
        root:{
            width:'100%',
            border:'1px solid black',
            marginTop:'2%',
            display:'flex',
            justifyContent:'center'
        },
        productWapper:{
            display:'flex',
            width:'85%',
            border:'1px solid black',
            flexWrap:'wrap'
        }
    }))
    const classes = style();
    return (
        <div className={classes.root}>
            <div className={classes.productWapper}>
                <Product/><Product/><Product/>
            </div>
        </div>
    )
}

export default ListProduct
