import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

const LoginForm = () => {
  const [username, setUsername] =  useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // username | password => chatEngine => give renderMessages
    // if above thing works out then => logged in
    // error => try with new username

    const authObject = { 'Project-ID': "e7b6ff61-0cb9-4f0c-a983-b4f4770170bd", 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers : authObject });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch(error) {

    }

  }

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
