import { Container } from "@mui/material"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "components/Header"
import Home from "pages/Home"
import Create from "pages/Create"
import Edit from "pages/Edit"

const Wrapper = styled.div`
  background-color: #12344c;
  padding-bottom: 3rem;
`;

function App() {
  return (
    <Router>
      <Wrapper className="App">
        <Header /> 
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Container>
      </Wrapper>
      <ToastContainer />
    </Router>
  );
}

export default App;

