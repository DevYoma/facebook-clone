import React from 'react';
import './Login.css';
import Facebook from '../assets/facebook.png';
import { Button } from '@material-ui/core';

const Login = () => {

    const SignIn = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className="login">
            <div className="login__logo">
                <img src={Facebook} alt="FACEBOOK"/>
                <h1 className="login__name">facebook</h1>
            </div>
            <Button type="submit" onClick={SignIn}>
                Sign In
            </Button>
        </div>
     );
}
 
export default Login;