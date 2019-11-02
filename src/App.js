import React from 'react';
import './App.css';
import { StateProvider } from './components/StateContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Race} from "./pages/Race";
import {Class} from "./pages/Class";
import { Theme } from "./pages/Theme";
import { NavBar } from "./components/NavBar";
import Skills from "./pages/Skills";

const initialState = {
  name: "",
  class: null,
  race: null,
  theme: null,
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'setRace':
      return { ...state, [action.type]: action.value};
    default:
      return { ...state, [action.type]: action.value};
  }
};

function App() {
  return (
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
          <NavBar />
          <Switch>
            <Route path="/race">
              <Race />
            </Route>
            <Route path="/class">
              <Class />
            </Route>
            <Route path="/theme">
              <Theme />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
          </Switch>
        </StateProvider>
    </Router>
  );
}

export default App;
