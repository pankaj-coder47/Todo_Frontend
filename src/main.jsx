import  { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';

export const server = 'https://apiserve.onrender.com/api/v1';

export const Content = createContext({ IsAuthenticated: false });

const AppWrapper = () => {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [User, setUser] = useState(null);

  return (
    <Content.Provider value={{ IsAuthenticated, setIsAuthenticated, loading, setLoading, User, setUser }}>
      <App />
    </Content.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppWrapper />
  </>,
);
