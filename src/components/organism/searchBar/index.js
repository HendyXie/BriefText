import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Microphone, Search } from '../../assets';

const searchBar = () => {
    const styleCust = makeStyles((theme)=>({
        root:{
            width:'100%',
            display:'flex',
            justifyContent:'center'
        },
        searchbarWapper:{
            width:'80%',
            border:'1px solid lightgrey',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'3%',
            [theme.breakpoints.down('xs')]:{
                width:'80%',
                marginTop:'7%',
              },
        },
        searchIcon:{
            alignItems:'center',
            border:'1px solid black'
        },
        searchText:{
            width:'100%'
        }
    }))
    const classes = styleCust();
    return (
        <div className={classes.root}>
            <div className={classes.searchbarWapper}>
                <img src={Search} alt='search'/>
                <input className={classes.searchText} placeholder='Search'/>
                <img src={Microphone} alt='microphone'/>
            </div>
        </div>
    )
}

export default searchBar;
