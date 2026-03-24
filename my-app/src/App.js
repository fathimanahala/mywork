import logo from './logo.svg';
import './App.css';
// import Header from './Header';
// import Footer from './Footer';
import BasicExample from "./BasicExample"; // ✅ fixed import
import React from "react";
import { Card, Button, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="p-4 text-center">
        <Card className="mx-auto" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>React Bootstrap Example</Card.Title>
            <Card.Text>
              This is a simple card with a Bootstrap button.
            </Card.Text>
            <Button variant="primary">Click Me</Button>
          </Card.Body>
        </Card>
      </Container>
      <div> 
        <BasicExample /> 
      </div>
    </>
  );
}

export default App;
