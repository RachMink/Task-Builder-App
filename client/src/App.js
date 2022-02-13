import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import ToDoListPage from './pages/ToDoListPage';
import {
  Box,
  Heading,
  Grommet,
  ResponsiveContext,
} from "grommet";
import './App.css';

const theme = {
  global: {
    colors: {
      brand: "#FFA16B",
    },
    font: {
      family: "Roboto Condensed",
      size: "14px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="small"
    style={{ zIndex: "1" }}
    {...props}
  />
);


class App extends React.Component {
  render() {
    return (
      <Grommet theme={theme}>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box
              overflow={{ horizontal: "auto" }}
              width={size === "small" ? "200px" : "400px"}
              fill
              full
            >
              <AppBar>
                <Heading level="3" margin="none">
                  Just Do It.
                </Heading>
              </AppBar>
              <Box
                direction="row"
                flex
                overflow={({ vertical: "scroll" }, { horizontal: "hidden" })}
              >
                <Box flex align="center" justify="center">
                  <ToDoListPage />
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
        <Router>
          <Switch>
            <Route path="/tasks" component={ToDoListPage} />
          </Switch>
        </Router>
      </Grommet>
    );
  }
}


export default App;
