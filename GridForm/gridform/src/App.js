// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Landingpage from './components/Landingpage';


function App() {

  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");

  let [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false
  });


  function submit(e){
    e.preventDefault();

    const newErrors = {
      firstname: firstname.trim() === "",
      lastname: lastname.trim()=== "",
      email: email.trim()==="",
    }
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error)=>error);
    if(hasErrors===false){
        console.log("First name: "+firstname);
      console.log("Last name: "+lastname);
      console.log("Email: "+email);
    }
  }

  const handleFirstName = (e)=>{
    setFirstname(e.target.value);
    if(errors.firstname){
      setErrors((prevError)=>({...prevError, firstname:false}))
    }
  }

  const handleLastName = (e)=>{
    setLastname(e.target.value);
    if(errors.lastname){
      setErrors((prevError)=>({...prevError, lastname:false}))
    }
  }

  const handleEmail = (e)=>{
    setEmail(e.target.value);
    if(errors.email){
      setErrors((prevError)=>({...prevError, email:false}))
    }
  }

    //Other logic ----------------------------------------------------------

    // if(firstname.trim()==="" || lastname.trim()===""|| email.trim()===""){

    //   alert("All fields are required");
    // }
    // else{
    //   console.log(firstname);
    //   console.log(lastname);
    //   console.log(email);
    // }

    //------------------------------------------------------------------------


  return (
    <div className="App" style={{backgroundColor:'darkseagreen', height:'100vh'}}>
      
   
     

      {/* //--------------------------------------------- */}
     <Container>
      <h2 className="mb-4"  style={{paddingTop:'25px'}}>React Bootstrap Form Using Grid</h2>
      <Form onSubmit={submit}>
        <Row className="mb-3">
          {/* First Name Field----------------------------------------------- */}
          <Col md={4}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Enter your first Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstname"
                value={firstname}
                onChange={handleFirstName}
                isInvalid={errors.firstname}
              />
              <Form.Control.Feedback type="invalid">
                first name can't be empty
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Last Name Field----------------------------------------- */}
          <Col md={4}>
            <Form.Group controlId="formLastName">
              <Form.Label>Enter your Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastname"
                value={lastname}
                onChange={handleLastName}
                isInvalid={errors.lastname}
              />
              <Form.Control.Feedback type="invalid">
                Last name can't be empty
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        

          {/* Email Field--------------------------------------------- */}
          <Col md={4}>
            <Form.Group controlId="formEmail">
              <Form.Label>Enter your Email</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleEmail}
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                Email is Required
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>

    <Routes>
        <Route path='/' element={<Landingpage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
