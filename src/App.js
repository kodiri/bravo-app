import React from 'react';
import ReactNotification from 'react-notifications-component';
import Logo from '../src/components/Logo';
import Form from '../src/components/Form';
import '../src/App.css';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <div className='App'>
      <ReactNotification />
      <Logo />
      <Form />   
    </div>
  );
}

export default App;
