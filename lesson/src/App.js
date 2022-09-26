import React, { useEffect, useState } from 'react';
import './App.css';
import MessageList from './messageList/MessageList';

function App() {
  const userName = "Алексей"
  const theme = "light"

  return (
    <div className="App">
      <Myheader theme={theme} />
      {/* <Myheader name={userName} id={1} /> */}
      <MessageList />
    </div>
  );
}

export default App;

// const Myheader = (props) => { }

const Myheader = ({ theme }) => {
  return (
    <div style={{ background: theme === "dark" ? "#282c34" : "#445444" }}>
      <h2>Привет, Алексей</h2>
    </div >
  );
}
