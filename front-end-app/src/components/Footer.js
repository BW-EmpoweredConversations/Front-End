import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
    const Container = styled.footer`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2px;
        background-color: #41b6e6;
        justify-content: center;
        position: fixed;
        bottom: 0;
        width: 100%;
    `;

    const FooterContainer = styled.div`
      display: flex;
      align-items: center;
    `;

    const Logo = styled.img`
      height: 30px;
      width: 30px;
    `;

    const Header3 = styled.h3`
      color: #191970;
      margin-left: 10px;
      margin-top: 10px;
      font-weight: bold;
      
    `;

    return (

        <Container>
            <FooterContainer>
                <Logo src="./logo.png" />
                <Header3>Lambda School Build Week November 2019</Header3>
            </FooterContainer>
        </Container>

    );
}