import React from "react";

import { Link } from 'react-router-dom';

import '../App.css';
import logo from '../logo.svg';

function Login() {

    return (
        <section >
            <header>
                <h2>Please Enter Your Contact Code to See Your Conversation Request</h2>

                <Link to="/"><button>Go to Home</button></Link>
                <Link to="/Login"><button>Go to Login</button></Link>
                <br />
                <br />
                <img src={logo} className="App-logo" alt="logo"/>
                
            </header>
        </section>
    );
}

export default Login;