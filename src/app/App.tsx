import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { Test } from '../features/Test/Test';
import { Login } from '../features/Login/Login';
import { Register } from '../features/Register/Register';
import { RecPassword } from '../features/RecPassword/RecPassword';
import { NewPassword } from '../features/NewPassword/NewPassword';
import { Profile } from '../features/Profile/Profile';
import { Page404 } from '../features/Page404/Page404';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Test />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/rec-password' element={<RecPassword />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/404' element={< Page404 />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  );
}

export default App;
