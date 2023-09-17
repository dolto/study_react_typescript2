import React from 'react';
import logo from './logo.svg';
import './App.css';
import s from './style';
import Header from './common/Header';
import MainList from './common/MainList';
import MainBanner from './common/MainBanner';

function App() {
  return (
    <s.AppElement>
      <Header></Header>
      <main>
        <MainBanner />
        <MainList />
      </main>
      
    </s.AppElement>
  );
}

export default App;
