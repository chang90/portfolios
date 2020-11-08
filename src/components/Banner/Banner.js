import React, { Component } from 'react';
import styled from 'styled-components';

const FullPage = styled.section`
  background: papayawhip;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  width: 30%;
  max-width: 40rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContent = styled.p`
  font-size: 1rem;
  color: palevioletred;
`;

class Banner extends Component {
  
  render() {
    return (
      <FullPage>
        <Wrapper>
          <Title>Hi,</Title>
          <TextContent>I am Chang,</TextContent>
          <TextContent>a full stack developer</TextContent>
        </Wrapper>
      </FullPage>
    );
  }
}

export default Banner;