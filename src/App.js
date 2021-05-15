import React from 'react';
// import Navbar from "./components/partials/Navbar.component"
// import Homecard from "./components/HomePage";
import './App.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
function App() {
  return (
    <Container>
    <div>
      <h1>Hey so click the button to start!!</h1>
      
      <Button variant="primary">Lets start</Button>
    </div></Container>
  );
}

export default App;
