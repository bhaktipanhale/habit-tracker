import React from 'react';
import DateTimepicker from "./DateTimepicker"
import './App.css';
import About from "./About";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CenteredGrid from './CenteredGrid';
import Header from './Header'


const useStyles = makeStyles({});
 
function App() {
    const classes = useStyles();
    return (
        <div>
        <div className={classes.container}>
        <Header />
        <BrowserRouter>
        <Switch>
          <Route exact path="/About" render={props => <About {...props} />} />
        </Switch>
        </BrowserRouter>
        <CenteredGrid />
      </div>
      
      
      <div className="datetime">
            <DateTimepicker/>
        </div>
      </div>
    );
}
 
export default App;