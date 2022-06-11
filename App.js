import React from 'react';
import Home from './src/screens/Home'
import Login from './src/screens/Login'

export default function App() {
  const estado = true
  return (
    <>
    {estado?
    <Home/>:
    <Login/>
    }
    </>
  );
}


