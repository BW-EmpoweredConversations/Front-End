import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Empowered Conversations</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
      <Link to="/Register">
        <button>Register</button>
      </Link>
      <Link to="/Login">
        <button>Go to Login</button>
      </Link>
    </header>
  );
}
