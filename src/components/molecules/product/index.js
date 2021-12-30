import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const Product = () => {
    const sytle = makeStyles(()=>({
        root: {
            maxWidth: '40%',
          },
          img: {
            maxWidth: '40%',
            height: '50%',
            backgroundPosition:'center'
          },
    }))
    const classes = sytle();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia>
                    <img className={classes.img} src="https://assets.tokodistributor.com/product/7cdc9fdf8df7d33e766216c4aac032c0.jpeg" alt="MS.V6IYUWWP20211224135137"/>
                </CardMedia>
                <CardContent>
                    <Typography>
                        Rp 20000 PRODUCT BARU BUAT EDIT 222"
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Product
