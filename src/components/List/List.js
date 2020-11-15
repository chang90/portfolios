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
const ListGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ListHeader = styled.h3`
  font-size: 1.25rem;
  color: palevioletred;
`;

const ListContent = styled.li`
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
      <Title>What I can do:</Title>
        <ListGroup>
          <div>
            <ListHeader>Front-End</ListHeader>
              <ul>
                <ListContent>React &amp; React-Native</ListContent>
                <ListContent>Angular 9 &amp; TypeScript</ListContent>
                <ListContent>Ngrx & Redux</ListContent>
                <ListContent>Component library design</ListContent>
                <ListContent>Styled Components</ListContent>
                <ListContent>Okta & Azure AD</ListContent>
                <ListContent>HTML5 + LESS(CSS3)</ListContent>
                <ListContent>JavaScript &amp; jQuery</ListContent>
                <ListContent>Bootstrap & Material-UI</ListContent>
                <ListContent>Responsive web design</ListContent>
                <ListContent>UX design (Axure)</ListContent>
              </ul>
          </div>
          <div>
            <ListHeader>Back-End</ListHeader>
            <ul>
              <ListContent>NodeJS</ListContent>
              <ListContent>Restful API &amp; SocketIO</ListContent>
              <ListContent>Ruby on Rails</ListContent>
              <ListContent>.NET Core &amp; C#</ListContent>
              <ListContent>AWS EC2 &amp; S3</ListContent>
              <ListContent>Graphql</ListContent>
              <ListContent>PostgreSQL</ListContent>
              <ListContent>SQLite</ListContent>
              <ListContent>MongoDB</ListContent>
            </ul>
          </div>
          <div>
            <ListHeader>General Skills</ListHeader>
            <ul>
              <ListContent>Git</ListContent>
              <ListContent>TDD</ListContent>
              <ListContent>Azure &amp; Docker</ListContent>
              <ListContent>Jira</ListContent>
            </ul>
          </div>
        </ListGroup>
        <Icon>
          <CoffeeOutlined />
        </Icon>
      </Wrapper>
    );
  }
}

export default List;
