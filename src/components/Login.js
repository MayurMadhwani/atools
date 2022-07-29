import React, { useState } from 'react'
import classes from './Login.module.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const emailSetter = (event)=>{
    setEmail(event.target.value);
  }

  const passwordSetter = (event) => {
    setPassowrd(event.target.value);
  }

  const handleLogin = async() => {
    
    const response = await fetch('https://reqres.in/api/login',{
      method: "POST",
      body: JSON.stringify({
        email:email,
        password:password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const res = await response.json();

    const status = response.ok;

    if(status){
      alert("Login Successful");
    }else{
      let error = res.error[0].toUpperCase() + res.error.slice(1);
      alert(error);
    }

    // console.log(res, status);

  }

  return (
    <div className={`${classes.main}`}>
        <h1>Welcome Back</h1>
        <p className={`${classes.sub}`}>Thank you for choosing us</p>

        <div className={`form-floating mb-3 ${classes.input}`}>
          <input value={email} onChange={emailSetter} type="email" class={`form-control`} id="floatingInput" placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address*</label>
        </div>
        <div className={`form-floating mb-3 ${classes.input}`}>
          <input value={password} onChange={passwordSetter} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password*</label>
        </div>

        <button onClick={handleLogin} type="button" className={`btn ${classes.btnCustom}`} style={{backgroundColor:"#023047"}}>Login</button>

        <div className={`${classes.bottom}`}>
            <div className="form-check">
                <input className={`form-check-input ${classes.check}`} type="checkbox" value="" id="flexCheckDefault"/>
                <label className={classes.btm} class="form-check-label" htmlFor="flexCheckDefault">
                    Remember Password  
                </label>
            </div>
            <span className={classes.btm}>Forgot Password?</span>
        </div>

    </div>
  )
}

export default Login