import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import ToDoListPage from './pages/ToDoListPage';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  Nav,
  Sidebar,
  Avatar,
  Anchor,
  ResponsiveContext,
} from "grommet";
import { Add } from "grommet-icons";

import './App.css';
import TaskList from './components/TaskList';

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
                  Get it done.
                </Heading>
              </AppBar>
              <Box
                direction="row"
                flex
                overflow={({ vertical: "scroll" }, { horizontal: "hidden" })}
              >
                <Box flex align="center" justify="center">
                  <TaskList />
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
        <Router>
          <Switch>
            {/* <Route path="/" component={ToDoListPage} /> */}
            <Route path="/posts/new" component={PostFormPage} />
            <Route path="/posts/:id" component={ShowPostPage} />
            <Route path="/about-us" component={AboutUsPage} />
          </Switch>
        </Router>
      </Grommet>
    );
  }
}


export default App;
