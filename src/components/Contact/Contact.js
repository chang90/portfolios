import React from 'react';
import styled from 'styled-components';
import { RocketOutlined, MobileOutlined, GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons';

const Contact = () => {
  const FullPage = styled.section`
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Icon = styled.div`
  color: papayawhip;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 26rem;
  line-height:26rem;
  @media (max-width: 1024px) {
    left: -20%;
    top: -20%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: palevioletred;
`;

const TextContent = styled.p`
  font-size: 1rem;
  color: palevioletred;
`;

const Link = styled.a`
  font-size: 1rem;
  color: palevioletred;
  text-decoration: none;
`
const Wrapper = styled.div`
  z-index: 1;
  padding:1rem;
`;

  return (
    <FullPage>
      <Wrapper>
        <Title>I'm looking for my next opportunity!</Title>
        <TextContent>Please feel free to contact me if you need any further information:</TextContent>
        <div>
          <TextContent><Link href="tel:0411123824"><MobileOutlined /> 0411 123 824</Link></TextContent>
          <TextContent>
            <Link href="mailto:chang.liu.programmer@gmail.com"><MailOutlined /> chang.liu.programmer@gmail.com</Link></TextContent>
          <TextContent>
            <Link target="_blank" rel='noreferrer' href="https://github.com/chang90"><GithubOutlined /> https://github.com/chang90</Link>
          </TextContent>
          <TextContent>
            <Link target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/chang-l/"><LinkedinOutlined /> https://www.linkedin.com/in/chang-l/</Link>
          </TextContent>
        </div>
      </Wrapper>
      
      <Icon>
        <RocketOutlined />
      </Icon>
    </FullPage>
  );
};

export default Contact;
