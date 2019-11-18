import React from "react";

import { Link } from 'react-router-dom';

import '../App.css';
import logo from '../logo.svg';

function RegisterPage() {

    return (
        <section >
            <header>
                <h2>Please Register to Start A Conversation</h2>
                <Link to="/"><button>Go to Home</button></Link>
                <Link to="/Login"><button>Go to Login</button></Link>
                <br />
                <br />
                <img src={logo} className="App-logo" alt="logo"/>
                
            </header>
        </section>
    );
}

export default RegisterPage;