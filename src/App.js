import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';

function App() {

  // imagine there is a user logged in 
  const user = "null";

  return (
    <div className="app">
      { !user ? <Login /> : (
        <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
        </>
      ) }

    </div>
  );
}

export default App;
