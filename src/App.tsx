import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Header from './components/Header';
import Home from './components/Home';
import Test from './components/Test';

import './App.css'

function App() {

  return (
    <BrowserRouter basename='/'>
      <>
        <Container>
          <Row>
            <Header pageTitle="Sátniprográmma"/>
          </Row>
          <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path = '/test' element = {<Test/>} />
        </Routes>
        </Container>
      </>
    </BrowserRouter>
  )
}

export default App
