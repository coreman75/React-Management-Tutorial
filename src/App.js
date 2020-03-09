import React, { Component } from 'react';
import Customer from './component/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCel from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }

})

const customers = [
  {
    'id' : '1',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : 'hone gil dong',
    'birthday' :  '20200305',
    'gender' : 'man',
    'job' : 'office worker'
  },
  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : 'kang dong gu',
    'birthday' :  '20200305',
    'gender' : 'man',
    'job' : 'office worker'
  },
  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : 'kim min su',
    'birthday' :  '20200305',
    'gender' : 'man',
    'job' : 'office worker'
  }
]


class App extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCel>ID</TableCel>
              <TableCel>IMAGE</TableCel>
              <TableCel>NAME</TableCel>
              <TableCel>BIRTHDAY</TableCel>
              <TableCel>GENDER</TableCel>
              <TableCel>JOB</TableCel>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return (
                <Customer key={c.id} id={c.id} image={c.image} name={c.name}
                  birthday={c.birthday} gender={c.gender} job={c.job} />
              )})}
            </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);

 