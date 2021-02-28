import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Formulaire.css';
import './Fond.css';


const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  specialOutline: {
    borderColor: "black",
    borderWidth: 1
  
  }
  
}));
export default function SignIn() {
  const classes = useStyles();



  return (
 
  
   
    <Container className="App-header" component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{marginTop: 160}}>
        <div style={{marginLeft: 165 }}>
        <Avatar className={classes.avatar}>
         <LockOutlinedIcon />
        </Avatar>
        </div>

        <Typography className="App" component="h1" variant="h5">
          Ecran de connexion
        </Typography>
        <form className={classes.avatar} noValidate>
          <TextField
            InputProps={{
              classes: { notchedOutline: classes.specialOutline }
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nom d'utilisateur"
            name="email"
            autoComplete="email"
            className={classes.textField}
            
            
          />
          <TextField
            
            InputProps={{
              classes: { notchedOutline: classes.specialOutline }
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="black"
            className={classes.submit}
            style={{backgroundColor:"darkgrey"}}
          >
            Connexion
          </Button>
         
        </form>
      </div>
      
    </Container>
  );
  
}