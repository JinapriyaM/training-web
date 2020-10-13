import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// import Diary from './containers/Diary/Diary'
//import AppHeader from "./components/Header/AppHeader";
import Diary from "./containers/Diary/Diary/Diary";
import Login from "./containers/Diary/Login/Login"

function App() {
	return (
		<Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/home" exact>
          <Diary />
        </Route>
      </Switch>
			{/* <AppHeader />
			<Diary />
			<Diary /> */}
		</Router>
	);
}

export default App;
