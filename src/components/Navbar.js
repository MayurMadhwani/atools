import React from 'react'
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg bg-light ${classes.nav}`}>
        <div className="container-fluid">
            
            <span className={`navbar-brand ${classes.span}`}>ATools<span className={classes.dot}>.</span></span>
            
            <div className={`collapse navbar-collapse ${classes.buttons}`} id="navbarTogglerDemo03">
              <div>
                <button type="button" className={`btn ${classes.btnCustom}`} style={{backgroundColor:"#023047"}}>Start Free Trial</button>
                <button type="button" className={`btn ${classes.btnCustom}`} style={{backgroundColor:"#FB8500"}}>Login</button>
              </div>
            </div>

        </div>
    </nav>
  )
}



export default Navbar