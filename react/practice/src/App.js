import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Home from './components/Home';

function App() {

  const userSession = JSON.parse(localStorage.getItem('user-session'));
  const [username, setUsername] = useState(userSession == null ? "" : userSession.username);
  const [isLogin, setIsLogin] = useState(userSession == null ? false : true);
  const [showRegister, setShowRegister] = useState(true);

  const initialRegisterData = {
    name:"",
    username:"",
    password:""
  };
  const [registerData, setRegisterData] = useState(initialRegisterData);

  /** Algorithm for user registeration
   * 1. validate data
   * 2. save data into localstorage
   * 3. display success message
   * 4. clear register form
   * 5. redirect to home page
   */
  
  const registerUser = (e) => {
    e.preventDefault();
    // Validation => homework
    let lsRegister = JSON.parse(localStorage.getItem('users'));
    if(lsRegister == null){
      lsRegister = [];
    }
    lsRegister.push(registerData);
    localStorage.setItem('users', JSON.stringify(lsRegister));
    localStorage.setItem('user-session',JSON.stringify(registerData));
    setUsername(registerData.username)
    alert("You have successfully registered as " + registerData.username);
    setRegisterData(initialRegisterData);
    setIsLogin(true);
  }

  const initialLoginData = {
    username:"",
    password:""
  };
  const [loginData, setLoginData] = useState(initialLoginData);

  /** Algorithm for user login
   * 1. validate data
   * 2. check username and password
   * 3. display success or error message
   * 4. clear login form
   * 5. redirect to home page
   */

  const loginUser = (e) => {
    e.preventDefault();
    // Validation => homework
    const users = JSON.parse(localStorage.getItem('users'));
    if( users == null || users.length == 0){
      alert("No user found as " + loginData.username + ". Click here to register.");
    }
    const user = users.filter((u) => {
      return (u.username == loginData.username && u.password == loginData.password)
    });
    if(user == null || user.length == 0){
      alert("Wrong username and password");
      return 0;
    }
    alert("You have successfully logged in as " + loginData.username);
    setLoginData(initialLoginData);
    localStorage.setItem('user-session',JSON.stringify(user[0]));
    setUsername(user[0].username)
    setIsLogin(true);
  }

  /** Algorithm for user logout
   * 1. remove user-session
   * 2. display success message
   * 3. redirect login form
   */
  const logoutUser = () => {
    localStorage.removeItem('user-session');
    setIsLogin(false);
    setShowRegister(false);
    alert("You are successfully logged out!");
  }

  return (
    <div className="container mt-3">
      {
        isLogin ? 
        // home page
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand><Link style={{ textDecoration: "none", color: "black" }} to="/">Practice App</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link style={{ textDecoration: "none", color: "gray" }} to="/calculator">Calculator</Link>
                </Nav>
                <Nav className="me-auto">
                  <Button onClick={logoutUser}>Logout</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Home username={username}/>} />
            <Route path='/calculator' element={<Calculator />} />
          </Routes>
        </> 
        : 
        // login and register
        <>
          {
            showRegister ? 
              <div className="row register">
                <div className="col-md-4" style={{margin:"0 auto"}}>
                  <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                      <Form onSubmit={registerUser}>
                        {/* name */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Name" value={registerData.name} onChange={(e)=>setRegisterData({...registerData,name: e.target.value})}/>
                        </Form.Group>

                        {/* username */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" placeholder="Enter Username" value={registerData.username} onChange={(e)=>setRegisterData({...registerData,username: e.target.value})}/>
                        </Form.Group>
    
                        {/* password */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" value={registerData.password} onChange={(e)=>setRegisterData({...registerData,password: e.target.value})}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Register
                        </Button>
                      </Form>
                      <Link onClick={()=>setShowRegister(false)}>Already have an account click here to login.</Link>
                    </div>
                  </div>
                </div>
              </div>
            :
              <div className="row login">
                <div className="col-md-4" style={{margin:"0 auto"}}>
                  <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                      <Form onSubmit={loginUser}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" placeholder="Enter username" value={loginData.username} onChange={(e)=>setLoginData({...loginData,username: e.target.value})} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" value={loginData.password} onChange={(e)=>setLoginData({...loginData,password: e.target.value})} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </Form>
                      <Link onClick={()=>setShowRegister(true)}>Click here to register.</Link>
                    </div>
                  </div>
                </div>
              </div>
          }
        </>
      }
    </div>
  )

  // const [data, setData] = useState({
  //   name:"",
  //   age:"",
  //   city:"",
  // });

  // const [isEmpty, setIsEmpty] = useState(true);

  // const updateName = (e) => {
  //   setData({ ...data, name: e.target.value})
  //   setIsEmpty( (e.target.value == '' && data.age == '' && data.city == '') ? true : false )
  // }
  // const updateAge = (e) => {
  //   setData({ ...data, age: e.target.value})
  //   setIsEmpty( (data.name == '' && e.target.value == '' && data.city == '') ? true : false )
  // }
  // const updateCity = (e) => {
  //   setData({ ...data, city: e.target.value})
  //   setIsEmpty( (data.name == '' && data.age == '' && e.target.value == '') ? true : false )
  // }

  // return (
  //   <div className="container">
  //     { isEmpty ? 
  //       <h1>No Data.</h1>
  //       :
  //       <>
  //         {
  //           data.name != '' ?
  //             <h1>Name: {data.name}</h1>
  //           : 
  //             <></>
  //         }
  //         {
  //           data.age != '' ?
  //             <h1>Age: {data.age}</h1>
  //           : 
  //             <></>
  //         }
  //         {
  //           data.city != '' ?
  //             <h1>City: {data.city}</h1>
  //           : 
  //             <></>
  //         }
  //       </>
  //     }
  //     <input type="text" placeholder='Name' onChange = {updateName} />
  //     <input type="text" placeholder='Age' onChange = {updateAge} />
  //     <input type="text" placeholder='City' onChange = {updateCity} />
  //   </div>
  // )

  // const [profiles, setProfiles] = useState([]);

  // useEffect(() => {
  //   fetch('/data/profiles.json')
  //       .then(response => response.json())
  //       .then(data => setProfiles(data))
  //       .catch(error => console.error('Error fetching the profiles:', error));
  // },[]);

  // return (
  //   <div className="container mt-5">
  //     <h1>Github Profiles</h1>
  //     <div className="row">
  //       {
  //         profiles.map((profile, key) => {
  //           return (
  //             <Profile key={key} profile={profile} />
  //           )
  //         })
  //       }
  //     </div>
  //   </div>
  // );
}

export default App;