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
  }, []); 

  const setLoginStatus = (status) => {  
    setIsLogin(status);
    localStorage.setItem('isLogin', JSON.stringify(status));
  };

  const setAuthData = (token) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  const authContextValue = {
    isLogin,
    setLoginStatus,
    authToken,
    setAuthData,
    setAuthToken
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  console.log('Auth context:', context);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
