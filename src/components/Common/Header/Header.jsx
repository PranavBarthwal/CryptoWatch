import React from 'react'
import "./styles.css" 
import TemporaryDrawer from './Drawer'

function Header() {

    

    return (
        <div className="header">
      <img src="src/assets/logo.png" className='w-40 ' />
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
        <a href="/dashboard">
          {/* <Button text={"dashboard"} /> */}
        </a>
      </div>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
    )
}

export default Header
