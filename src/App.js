// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import List from './components/List/List';
import ProjectTemplate from './components/ProjectTemplate/ProjectTemplate';

function App() {
  const [projects] = useState([
    {
      title: 'My Shopping List',
      description: 'a React Native Android app can help people to reduce food waste.',
      techArray: [
        'React Native -- front end',
        'SQLite -- front end database',
        'NodeJS -- backend server (in progress)',
        'Amazon API Gateway -- Serverless (in progress)',
        'AWS DynamoDB -- database (planing)'
      ],
      download: 'https://github.com/chang90/MyShoppingListV2/raw/master/MyShoppingList-v2.0.0.apk',
      github: 'https://github.com/chang90/MyShoppingListV2'
    },
    {
      title: 'My Fridge Manager',
      description: 'This web app can encourage roommates to share fridge.',
      techArray: [
        'Bootstrap -- front end',
        'Sinatra -- backend server',
        'PostgreSQL -- database',
        'Heroku -- hoster'
      ],
      url: 'https://cryptic-ocean-77629.herokuapp.com/',
      github: 'https://github.com/chang90/fridge_manager'
    },
    {
      title: 'Split Bill Master',
      description: 'This web app can help event organizer to collect money from participants.',
      techArray: [
        'React &amp; Material-UI -- front end',
        'NodeJS -- backend server',
        'Paypal Sandbox -- payment',
        'Heroku -- hoster'
      ],
      url: 'https://cryptic-ocean-77629.herokuapp.com/',
      github: 'https://github.com/chang90/fridge_manager'
    }
  ]);
  return (
    <div className="App">
        <Banner></Banner>
        <List></List>
        {projects.map((project, index) => (
          <ProjectTemplate key={index} project={project} pageindex={index}/>
      ))}
        
    </div>
  );
}

export default App;
