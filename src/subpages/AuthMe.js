import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../utils/authContext.js';
import { useNavigate } from 'react-router-dom';

const AuthMe = () => {
  const { setLoginStatus, setAuthToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Отримуємо токен з localStorage
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
          throw new Error('No authentication token available.');
        }

        const response = await axios.post('https://catopia-backendd.onrender.com/auth/me', null, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        console.log(response.data);
        console.log('Login successful');
        setLoginStatus(true);
        setAuthToken(authToken);
        navigate('/home');
      } catch (error) {
        console.error('Login failed', error);
        setLoginStatus(false);
        navigate('/home'); 
      }
    };

    fetchData();
  }, [setLoginStatus, setAuthToken, navigate]);

  return null; // Повертаємо null, оскільки цей компонент нічого не рендерить
};

export default AuthMe;
