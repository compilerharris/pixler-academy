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

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="container">
      {
        isLogin ? 
        <>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand><Link style={{ textDecoration: "none", color: "black" }} to="/">Practice App</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link style={{ textDecoration: "none", color: "gray" }} to="/calculator">Calculator</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/calculator' element={<Calculator />} />
          </Routes>
        </> 
        : 
        <>
          {
            showRegister ? 
              <div className="row register">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text> */}
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                          Register
                        </Button>
                      </Form>
                      <Link>Click here to register.</Link>
                    </div>
                  </div>
                </div>
              </div>
            :
              <div className="row login">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text> */}
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </Form>
                      <Link>Click here to register.</Link>
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