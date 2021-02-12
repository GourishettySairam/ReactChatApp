import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="e7b6ff61-0cb9-4f0c-a983-b4f4770170bd"
      userName="Admin"
      userSecret="admin"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  )
}

export default App;