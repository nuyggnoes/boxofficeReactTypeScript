import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { Global, css } from '@emotion/react';
import Detail from './pages/detail/Detail';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    background-color: #141414;
  }
`;

function App(): JSX.Element {
  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
