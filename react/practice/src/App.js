import './App.css';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Practice</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/calculator">Calculator</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/calculator' element={<Calculator/>}/>
      </Routes>
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