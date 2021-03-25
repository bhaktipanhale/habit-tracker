import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  
  },
  paper: {
    maxWidth: 1000,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  
  
}));

export default function CenteredGrid() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
        <Grid
        direction="row"
        justify="center"
        alignItems="center">
          <Paper className={classes.paper}>Make my Habit
          < Button justify ="flex-end"></Button>
          <Button variant="contained" color="primary" >
        CREATE
      </Button></Paper></Grid>
        <Grid item xs={12}  
        container 
        direction="row"
        justify="center"   
        alignItems="center">
          <Paper className={classes.paper}>Show Motivational Quotes
          <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }} />  
        </Paper>  
         <Paper className={classes.paper}>Turn on reminder
          <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></Paper>
      </Grid>
      </Grid>
      </Grid>
    </div>
  );
}