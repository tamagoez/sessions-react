import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import Toppage from './pages/toppage';
import Account from './pages/account';

// https://zenn.dev/kenara/articles/3677b9a899cfb9
// https://reffect.co.jp/react/react-router-6
import NotFound from './components/404';
 
class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toppage />} />
          <Route path="/login" element={<Auth type="login" />} />
          <Route path="/signup" element={<Auth type="signup" />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<NotFound />} />;
        </Routes>
      </BrowserRouter>
    );
  };
}

export default App;
