import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import { Auth, API } from 'aws-amplify'

function App() {
  const showResponse = async() => {
    const apiName = "TestAPI";
    const path = '';
    const myInit = {
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
      },
    }

    API.get(apiName, path, myInit)
    .then(response => {
      console.log(response)
      window.alert(response.body)
    })
    .catch(err => {
      console.log(err)
      window.alert(err);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={showResponse}>Click</button>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
