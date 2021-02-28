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
import { Maximize } from '@material-ui/icons';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(etudiant,entreprise, prof, spe) {
  return { etudiant,entreprise, prof, spe };
}

const rows = [

  createData('uneEntreprise', "unResponsable", "uneAdresse", "unSite"),
  createData('uneEntreprise2', "unResponsable2", "uneAdresse2", "unSite2"),
  createData('uneEntreprise3', "unResponsable3", "uneAdresse3", "unSite3"),
  createData('uneEntreprise4', "unResponsable4", "uneAdresse4", "unSite4"),
  createData('uneEntreprise5', "unResponsable5", "uneAdresse5", "unSite5"),
  createData('uneEntreprise6', "unResponsable6", "uneAdresse6", "unSite6"),
  createData('uneEntreprise7', "unResponsable7", "uneAdresse7", "unSite7"),
  createData('uneEntreprise8', "unResponsable8", "uneAdresse8", "unSite8"),
  createData('uneEntreprise9', "unResponsable9", "uneAdresse9", "unSite9"),
  createData('uneEntreprise10', "unResponsable10", "uneAdresse10", "unSite10"),
  createData('uneEntreprise11', "unResponsable11", "uneAdresse11", "unSite11"),
  createData('uneEntreprise12', "unResponsable12", "uneAdresse12", "unSite12"),
  createData('uneEntreprise13', "unResponsable13", "uneAdresse13", "unSite13"),
  createData('uneEntreprise14', "unResponsable14", "uneAdresse14", "unSite14")

];

export default function BasicTable() {
  const classes = useStyles();
  return (
    <div className="div-center">
          <Button
              type="submit"
              
              variant="contained"
              style={{color:'black', backgroundColor:"darkgrey"}}
              className={classes.submit}
              > 
              Ajouter un stagiaire
          </Button>
          <Button
            type="submit"

            variant="contained"
            color="inherit"
            className={classes.submit}
            style={{backgroundColor:'darkgrey', color:'black', marginLeft:20}}
            >
            Rechercher un stagiaire
          </Button>
          <hr />
    <TableContainer component={Paper} style={{backgroundColor:"white"}}>
          
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow> 
            <TableCell align="left">Etudiant</TableCell>
            <TableCell align="left">Entreprise</TableCell>
            <TableCell align="left">Professeur</TableCell>
            <TableCell align="left">Spécialité</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow >
              <TableCell align="left">{row.etudiant}</TableCell>
              <TableCell align="left">{row.entreprise}</TableCell>
              <TableCell align="left">{row.prof}</TableCell>
              <TableCell align="left">{row.spe}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}