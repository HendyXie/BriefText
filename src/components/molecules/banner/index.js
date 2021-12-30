import { Card, CardMedia, makeStyles } from '@material-ui/core'
import React from 'react'

const banner = ({image,title,...rest}) => {
    const style = makeStyles((theme)=>({
        root:{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            marginTop:'10px'
        },
        card:{
            display:'flex',
            width:'85%',
            height:'80%',
            [theme.breakpoints.down('xs')]:{
                width:'90%',
                height:'80%',
            },
        },
        imgMedia:{
            width:'100%',
            height:'70%',
            [theme.breakpoints.down('xs')]:{
                width:'100%',
                height:'100%',
            },
        },
        img:{
            width:'100%',
            height:'70%',
            maxHeight:'400px',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
        },
    }))
    const classes = style();
    return (
        <div className={classes.root}>
            <Card className={classes.card} {...rest}>
                <CardMedia className={classes.imgMedia}><img className={classes.img} src={image} alt={title}/></CardMedia>
            </Card>
        </div>
    )
}

export default banner;
