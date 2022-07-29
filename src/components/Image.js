import React from 'react'
import classes from './Image.module.css';
import image from '../images/office.jpg';

const Image = () => {
  return (
    <div className={`${classes.main}`}>
        <img className={`${classes.img}`} src={image}/>
    </div>
  )
}

export default Image