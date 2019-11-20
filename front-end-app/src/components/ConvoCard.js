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


const ConvoCard = props => {
  return(
    <CardContainer>
      <Header2>Message Sent To: {props.conv.name}</Header2>
      <Header3>Phone: {props.conv.phone_number}</Header3>
    </CardContainer>
  );
};

export default ConvoCard;