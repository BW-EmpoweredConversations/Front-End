import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #41b6e6;
    align-content: center;
  `;

  const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const Logo = styled.img`
    height: 75px;
    width: 75px;
  `;

  const Header = styled.div`
    color: #191970;
    margin-left: 10px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 35px;
  `;

  return (
    <Container>
      <HeaderContainer>
        <Logo src="./logo.png" />
        <Header>Empowered Conversations</Header>
      </HeaderContainer>
      <div className="nav-container">
        <Link to="/Start" className="nav">
          Start&nbsp;a&nbsp;Conversation
        </Link>
        <Link to="/Register" className="nav">
          Sign&nbsp;Up
        </Link>
        <Link to="/Login" className="nav">
          Login
        </Link>
        <a
          href="https://zealous-williams-0d9378.netlify.com/"
          className="nav-a"
        >
          Home
        </a>

      </div>
    </Container>
  );
}
