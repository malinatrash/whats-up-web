import { useState } from 'react';
import LoginForm from './components/auth/LoginForm';
import PhoneNumberInput from './components/auth/PhoneNumberInput';
import Chat from './components/chat/Chat';
import { Credentials } from './types';

function App() {
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [chatStarted, setChatStarted] = useState<boolean>(false);

  const handleLogin = (creds: Credentials) => {
    setCredentials(creds);
  };

  const handleStartChat = () => {
    if (phoneNumber.trim()) {
      setChatStarted(true);
    }
  };

  if (!credentials) {
    return <LoginForm onLogin={handleLogin} />;
  }

  if (!chatStarted) {
    return (
      <PhoneNumberInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        onSubmit={handleStartChat}
      />
    );
  }

  return <Chat credentials={credentials} phoneNumber={phoneNumber} />;
}

export default App;
