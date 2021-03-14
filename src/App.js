// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import List from './components/List/List';
import ProjectTemplate from './components/ProjectTemplate/ProjectTemplate';
import Contact from './components/Contact/Contact';

function App() {
  const [projects] = useState([
    {
      title: 'UI-component-documentation-tool',
      description: 'an npm package project to help developer document UI component in broswer.',
      techArray: [
        'esbuild',
        'React',
        'Redux',
        'TypeScript',
        'NodeJS',
        'Lerna'
      ],
      imageUrl: process.env.PUBLIC_URL + '/images/uicomponenttool.png',
      github: 'https://github.com/chang90/UI-component-documentation-tool'
    },
    {
      title: 'My Shopping List',
      description: 'a React Native Android app can help people to reduce food waste.',
      techArray: [
        'React Native',
        'SQLite',
        'NodeJS',
        'Amazon API Gateway',
        'AWS DynamoDB'
      ],
      imageUrl: process.env.PUBLIC_URL + '/images/apk.png',
      download: 'https://github.com/chang90/MyShoppingListV2/raw/master/MyShoppingList-v2.0.0.apk',
      github: 'https://github.com/chang90/MyShoppingListV2'
    },
    {
      title: 'My Fridge Manager',
      description: 'This web app can encourage roommates to share fridge.',
      techArray: [
        'Bootstrap',
        'Sinatra',
        'PostgreSQL',
        'Heroku'
      ],
      imageUrl: process.env.PUBLIC_URL + '/images/myfridgemanager.png',
      url: 'https://cryptic-ocean-77629.herokuapp.com/',
      github: 'https://github.com/chang90/fridge_manager'
    },
    {
      title: 'Split Bill Master',
      description: 'This web app can help event organizer to collect money from participants.',
      techArray: [
        'React & Material-UI',
        'NodeJS',
        'Paypal',
        'Heroku'
      ],
      imageUrl: process.env.PUBLIC_URL + '/images/collectyourmoney.png',
      url: 'https://cryptic-ocean-77629.herokuapp.com/',
      github: 'https://github.com/chang90/fridge_manager'
    },
    {
      title: 'My Portfolio',
      description: 'You are watching it now',
      techArray: [
        'React',
        'Styled-component',
        'gh-pages'
      ],
      url: 'https://chang90.github.io/portfolios/',
      github: 'https://github.com/chang90/portfolios'
    }
  ]);
  return (
    <div className="App">
      <Banner></Banner>
      <List></List>
      {projects.map((project, index) => (
        <ProjectTemplate key={index} project={project} pageindex={index}/>
    ))}
    <Contact></Contact>
    </div>
  );
}

export default App;
