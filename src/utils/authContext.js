import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLogin');
    const storedAuthToken = localStorage.getItem('authToken');

    if (storedLoginStatus) {
      setIsLogin(JSON.parse(storedLoginStatus));
    }

    if (storedAuthToken) {
      setAuthToken(storedAuthToken);
    }
  }, [authToken]); 

  const setLoginStatus = (status) => {  
    setIsLogin(status);
    localStorage.setItem('isLogin', JSON.stringify(status));
  };

  return (
    <AuthContext.Provider value={{ isLogin, setLoginStatus, authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log("Current AuthContext in useAuth:", context);

  return context;
};
