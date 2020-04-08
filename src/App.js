import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import Certificates from './components/Certificates/Certificates';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Content} />
      <Route exact path="/certificates" component={Certificates} />
      <Footer />
    </div>
  );
}

export default App;
