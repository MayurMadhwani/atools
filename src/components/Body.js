import React from 'react'
import classes from './Body.module.css';
import Image from './Image';
import Login from './Login';


const Body = () => {
  return (
    <div className={`${classes.body}`}>
        <Login/>
        <Image/>
    </div>
  )
}

export default Body