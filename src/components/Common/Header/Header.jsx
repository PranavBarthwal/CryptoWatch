import React from 'react'
import "./styles.css" 
import TemporaryDrawer from './Drawer'
import Button from '../Button/Button'

function Header() {

    

    return (
        <div className="header">
      <img src="src/assets/logo.png" style={{ width:"10rem" }} />
      <div className="links">
        {/* <Switch checked={darkMode} onClick={() => changeMode()} /> */}
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="#">
          <Button text={"dashboard"} onClick={() => console.log("clicked")} outlined={false} />
        </a>
      </div>
      
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
    )
}

export default Header
