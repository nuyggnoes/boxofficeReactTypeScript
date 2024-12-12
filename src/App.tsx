import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import { Global, css } from '@emotion/react';
import Detail from './pages/detail/Detail';
import { Provider } from 'react-redux';
import store from './redux/store';

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
      <Provider store={store}>
        <Global styles={globalStyles} />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
