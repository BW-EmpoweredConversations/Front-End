import React from 'react';

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2%;
  border: 3px solid greenyellow;
  padding: 0 2%;
  background-color: lightgoldenrodyellow;
`;

const Header2 = styled.h2`
  color: blue;
`;

const Header3 = styled.h3`
  color: olivedrab;
`;


const ProfileCard = props => {
  return(
    <CardContainer>
      <Header2>Name: {props.prof.name}</Header2>
      <Header3>Email: {props.prof.email}</Header3>
      <Header3>Phone: {props.prof.phone_number}</Header3>
    </CardContainer>
  );
};

export default ProfileCard;