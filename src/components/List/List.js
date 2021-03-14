import React, { Component } from 'react';
import styled from 'styled-components';
import { CoffeeOutlined } from '@ant-design/icons';

const Wrapper = styled.section`
  background: white;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 4em;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: palevioletred;
  display: block;
  
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const ListContent = styled.p`
  font-size: 1rem;
  color: palevioletred;
`;

const Icon = styled.div`
  color: papayawhip;
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 26rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

class List extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Who am I?</Title>
        <ListContent>I can declare that I am a Javascript developer, and I am able to write code...</ListContent>
        <ListContent>But that is too boring, I am not just a person who able to write code.</ListContent>
        <ListContent>I was originally coming from the printing industry with a strong design background. I am proud of that, attention to detail is in my blood!</ListContent>
        <ListContent>I care about people, and I am a good team player ;)</ListContent>
        <ListContent>I am passionate about new technology, and I love build things!</ListContent>
        <Icon>
          <CoffeeOutlined />
        </Icon>
      </Wrapper>
    );
  }
}

export default List;
