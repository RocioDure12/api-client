import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useUsersApi from './hooks/useUsersApi';
import usePostApi from './hooks/usePostApi';

function App() {
  const usersApi = useUsersApi();

  const postApi=usePostApi();
  
  const loadUsers = async () => {
    const users = await usersApi.read();
    console.log("Users",users);
  };

  useEffect(()=>{
    loadUsers();
    postApi.read().then(console.log);
  },[])




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
      </header>
    </div>
  );
}

export default App;
