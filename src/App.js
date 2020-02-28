import React from "react";
import { Route, Link, NavLink } from 'react-router-dom'

import Header from "./components/Header.js";
import SearchForm from './components/SearchForm'
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'

export default function App() {
  return (
    <main>
      <Header />
      {/* <NavLink to='/'>Home</NavLink>
      <NavLink to='/characters'>Characters</NavLink> */}
      <Route exact path='/' >
        <WelcomePage />
      </Route>

      <Route path='/characters' >
        <CharacterList />
      </Route>
    </main>
  );
}
