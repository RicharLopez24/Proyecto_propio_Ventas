
import './App.css';
import { auth } from './Firebase/Firebase';
import Login from './Login/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
//import Home from './Views/Home';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Registro from './Views/Registro';
import Navbar from './Router/Navbar';
import { Outlet } from "react-router-dom";

function App() {

  const [user] = useAuthState(auth);
  if(!user) return <Login/>
  return (
    <div className="App">
      
      <Navbar/>             
      <Outlet />
    </div>
  );
}

export default App;


