import React, { useState } from 'react';
import { DownloadOutlined, GithubOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: ${props => props.inputColor || "white"};
  width: 100vw;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  padding: 4em;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom:0.5rem;
  color: palevioletred;
  display: block;
`;

const Label = styled.label`
  font-size: 1.25rem;
  margin-bottom: -2rem;
  color: palevioletred;
  display: block;
`;

const TechContent = styled.li`
  font-size: 1rem;
  color: palevioletred;
`;

const Description = styled.h3`
  color: palevioletred;
`;

const TextContent = styled.p`
  font-size: 1rem;
  color: palevioletred;
`;

const ListContainer = styled.ul`
  padding-bottom: 1rem;
`

const Button = styled.button`
  background-color: palevioletred;
  color: white;
  border-radius: 3px;
  border-style: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 1rem;
  &:hover {
    background-color: #5F122F;
  }
`;

function ProjectTemplate(props) {
  console.log(props)
  const [project] = useState(props.project);
  const [pageindex] = useState(props.pageindex);
    return (
      <Wrapper inputColor={pageindex % 2 === 0 ? 'papayawhip': 'white'}>
        <Label>Personal Project:</Label>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <div>
          <TextContent>The technologies used in this project:</TextContent>
          <ListContainer>
            {project.techArray.map((tech, index) => (
              <TechContent key={index}>{tech}</TechContent>
            ))}
          </ListContainer>
          <div>
            { project.download ? <Button target="_blank" rel='noreferrer' href={project.download}><DownloadOutlined /> Apk</Button> : null }
            <Button target="_blank" rel='noreferrer' href={project.github}><GithubOutlined /> GitHub</Button>
          </div>
        </div>
      </Wrapper>
    );
}

export default ProjectTemplate;
