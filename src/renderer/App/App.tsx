import * as React from 'react';
import * as reactLogo from './images/react-icon.svg';
import * as tsLogo from './images/typescript-icon.svg';
import * as electronLogo from './images/electron-icon.svg';
import './App.css';

export const App = (): JSX.Element => {
  return (
    <div className='App'>
      <div className='container'>
        <img
          src={reactLogo.default}
          className='App-logo'
          alt='react-logo'
          id='react-logo'
        />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
          id='react-link'
        >
          Learn React
        </a>
      </div>
      <div className='container'>
        <img
          src={tsLogo.default}
          className='App-logo'
          alt='typescript-logo'
          id='typescript-logo'
        />
        <a
          className='App-link'
          href='https://www.typescriptlang.org/'
          target='_blank'
          rel='noopener noreferrer'
          id='typescript-link'
        >
          Learn TypeScript
        </a>
      </div>
      <div className='container'>
        <img
          src={electronLogo.default}
          className='App-logo'
          alt='electron-logo'
          id='electron-logo'
        />
        <a
          className='App-link'
          href='https://www.electronjs.org/'
          target='_blank'
          rel='noopener noreferrer'
          id='electron-link'
        >
          Learn Electron
        </a>
      </div>
    </div>
  );
};

export default App;
