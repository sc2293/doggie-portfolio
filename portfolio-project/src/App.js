import {useState} from 'react';
import HomePage from './components/HomePage'
import RandomPage from './components/RandomPage'
import AboutMePage from './components/AboutMePage';
import { TEST_DOGS } from "./TEST_DOGS"
import { Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  const [dogsList, setDogsList] = useState( TEST_DOGS )

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Oh My Dog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/random">Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={ <HomePage dogsList = {dogsList}/> }/>
          <Route path="/random" element={ <RandomPage dogsList = {dogsList}/> }/>
          <Route path="/dogs/:dogId" element={ <AboutMePage dogsList={dogsList} /> } />
        </Routes>
        </Container>
    </div>
  );
}

export default App;
