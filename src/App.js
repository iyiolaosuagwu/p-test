import React from "react"
import "assets/sass/main.sass"
import Home from "pages/home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
