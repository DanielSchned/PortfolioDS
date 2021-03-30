import React, { useEffect } from "react";
import './App.css';
import './Presentation.css';
import './Box.css'
import Aos from 'aos';
import "aos/dist/aos.css";

import php from './php.png';
import JAVA from './java.png';
import Python from './python.png';
import C from './csharp.png';
import HTML from './html.png';
import CSS from './css.png';
import JS from './javascript.png';
import NodeJs from './react.png';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';


function Box() {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),

    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      backgroundColor:"transparent",
      boxShadow:"none",
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(3, 3),
    },
  }));

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();
  return (
     <div>
      <div style = {{marginLeft:"10%",marginRight:"10%"}}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {NodeJs}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {C}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {php}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {JAVA}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {HTML}/> </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {CSS}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {JS}/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><img data-aos="fade-up" style = {{borderRadius:"5px", width:"100%", maxWidth : "100px", maxHeight:"100px"}} src = {Python}/></Paper>
        </Grid>
      </Grid>
      </div>
      <hr className = "hr"/>
      
      
      </div>
  );
}

export default Box;