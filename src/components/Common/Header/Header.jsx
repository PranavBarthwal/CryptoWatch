import React from 'react'
import "./styles.css" 
import TemporaryDrawer from './Drawer'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

function Header() {

    

    return (
        <div className="header">
      <img src="src/assets/logo.png" style={{ width:"10rem" }} />
      <div className="links">
        {/* <Switch checked={darkMode} onClick={() => changeMode()} /> */}
        <navLink to="/">
          <p className="navLink">Home</p>
        </navLink>
        <navLink to="/compare">
          <p className="navLink">Compare</p>
        </navLink>
        <navLink to="/watchlist">
          <p className="navLink">Watchlist</p>
        </navLink>
        <navLink to="/dashboard">
          <Button text={"dashboard"} onClick={() => console.log("clicked")} outlined={false} />
        </navLink>
      </div>
      
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
    )
}

export default Header
