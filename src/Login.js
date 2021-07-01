import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            //if signIn successfully
                history.push('/');
        })
        .catch(error => alert(error.massage));
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //if register successfully
            console.log(auth); 
            if (auth) {
                history.push('/');
            }
        })
        .catch(error => alert(error.massage));
    }

    return (
        <div className="login">

            <Link to="/">
                <img className="login_logo"
                    src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"
                />
            </Link>

            <div className="login_container">

                <h1>Sign-In</h1>

                <form>

                    <h5>E-mail</h5>
                    <input type='text' value={email}
                    onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn}
                    className="login_signInButton">Sign In</button>

                </form>

                <p>
                    By signing-in you agree to the terms and conditions of the company.
                    Please read our Privacy Notice.
                </p>

                <button type='submit' onClick={register} className="login_registerButton">Create an Account
                </button>
                
                <p>If New! put your Email, set Password and click to create your account</p>

            </div>
            
        </div>
    );
}

export default Login;
