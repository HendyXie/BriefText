import { makeStyles, Paper } from '@material-ui/core';
import React from 'react'

const Kategory = ({label,icon,id,category_slug,...rest}) => {
    const style = makeStyles((theme)=>({
        root:{
            width:'25%',
            marginTop:'2%',
            margin:'6px'
        },
        paper:{
            display:'flex',
            flexDirection:'column',
            flexWrap:'warp',
            justifyContent:'center',
            alignItems:'center',
            "&:hover": {
                backgroundColor:'#b6b9bf',
              },
        },
        imgWapper:{
            width:'100px',
            height:'100px',
            [theme.breakpoints.down('xs')]:{
                width:'90px',
                height:'90px',
            },
        },
        img:{
            width:'100%',
            height:'100%',
            border:'1px solid black'
        },
        text:{
            fontSize:'14px'
        }
    }))
    const classes = style();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} {...rest}>
                <div className={classes.imgWapper}>
                    <img className={classes.img} src={icon} key={id} alt={category_slug}/>
                </div>
                <div className={classes.text}>
                    <label>{label}</label>
                </div>
            </Paper>
        </div>
    )
}

export default Kategory;
