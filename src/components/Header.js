import React from "react";
import { Route, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavLink to='/' component={Link}>Home</NavLink>
      <NavLink to='/characters' component={Link}>Characters</NavLink>
    </header>
  );
}
