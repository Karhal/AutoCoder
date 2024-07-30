import React from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Header title='My App' />
      <ul>
        <ListItem item='Item 1' />
        <ListItem item='Item 2' />
        <ListItem item='Item 3' />
      </ul>
      <Button text='Click me' onClick={() => console.log('Button clicked')} />
    </div>
  );
};

export default App;
