// utils/auth.ts
import { useState  } from 'react';

export const getStoredToken = () => {
 const storedToken = localStorage.getItem('token');
 return storedToken || null;
};

const storeToken = (token: string) => {
 localStorage.setItem('token', token);
};

const removeToken = () => {
 localStorage.removeItem('token');
};

export const useToken = () => {
 const [token, setToken] = useState(getStoredToken());

 const saveToken = (userToken: string) => {
    storeToken(userToken);
    setToken(userToken);
 };

 const deleteToken = () => {
    removeToken();
    setToken(null);
 };

 return { token, saveToken, deleteToken };
};