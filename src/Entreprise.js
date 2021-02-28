import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Fond.css';
import {Button, IconButton} from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(entreprise, responsable, adresse, site, email, specialite, niveau) {
  return { entreprise, responsable, adresse, site, email, specialite, niveau };
}

const rows = [

  createData('Entreprise', "Responsable", "Adresse", "Site", "Email", "Spécialité", "Niveau"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1"),
  createData('Entreprise1', "Responsable1", "Adresse1", "Site1", "Email1", "Spécialité1", "Niveau1")
  

];

export default function BasicTable() {
  const classes = useStyles();
  return (
    <div className="div-center">
      <Button
        type="submit"

        variant="contained"
        color="inherit"
        className={classes.submit}
        style={{backgroundColor:'darkgrey', color:'black'}}
        >
        Ajouter une entreprise
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="inherit"
        className={classes.submit}
        style={{backgroundColor:'darkgrey', color:'black', marginLeft:20}}
        >
        Rechercher une entreprise
      </Button>

      <hr/>
    <TableContainer component={Paper} style={{backgroundColor:"white"}}>
        
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell align="left">Entreprise</TableCell>
            <TableCell align="left">Responsable</TableCell>
            <TableCell align="left">Adresse</TableCell>
            <TableCell align="left">Site</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Spécialité</TableCell>
            <TableCell align="left">Niveau</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="left">{row.entreprise}</TableCell>
              <TableCell align="left">{row.responsable}</TableCell>
              <TableCell align="left">{row.adresse}</TableCell>
              <TableCell align="left">{row.site}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.specialite}</TableCell>
              <TableCell align="left">{row.niveau}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  );
}