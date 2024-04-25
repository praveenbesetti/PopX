import logo from './logo.svg';
import './App.css';


import Register from './components/acount';
import Profile from './components/profile';
import Main from './components/main';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/account' element={<Register/>}/>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/login' element={<Login/>}/> 
      </Routes>
    
    </div>
  );
}

export default App;
