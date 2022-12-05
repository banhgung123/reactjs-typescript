import React from 'react';
import logo from './logo.svg';
import './App.css';

/* Font Awesome */
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

/* Bootstrap */
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'; 
import Customer from './components/Customer';
import { CustomerClass } from './components/CustomerClass';
import Employee from './components/Employee';
import { EmployeeClass } from './components/EmployeeClass';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import Users from './components/Users';
import Navbar from './components/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import UserDetailRouter from './components/UserDetailRouter';
import About from './components/About';

function App() {
  return (
    <React.Fragment>
      {/* <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">App Component</p>
              <p className='fst-italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti eos dolorum, amet asperiores enim excepturi, nemo animi saepe eligendi consectetur, maxime rerum tempora impedit! Fugit facilis earum tempora praesentium quibusdam.</p>
              <button className="btn btn-success btn-sm">
                <i className="fa fa-book"/> Read More
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Customer name={'Rajan'} age={25} title={'Software Engineer'}/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <CustomerClass name={'Rajan'} age={25} title={'Software Engineer'}/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Employee/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <EmployeeClass/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Counter/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Greetings/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <LoginForm/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <UserList/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Users/>
            </div>
          </div>
        </div>
      </div> */}
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<Users/>}/>
        <Route path={'/contacts/:id'} element={<UserDetailRouter/>}/>
        <Route path={'/about'} element={<About/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
