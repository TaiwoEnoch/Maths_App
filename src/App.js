import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './pages/Header';
import Home from './pages/Home';
import Quote from './pages/Quote';
// import NotFound from './pages/NotFound';

class App extends React.PureComponent {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    );
  }
}

export default App;
