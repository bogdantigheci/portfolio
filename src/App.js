import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Certificates from './components/Certificates/Certificates';
import About from './components/Content/About';
import Projects from './components/Content/Projects';
import ReactTooltip from 'react-tooltip';

const App = () => {
  return (
    <div className="App">
      <ReactTooltip />
      <Header />
      <About />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
};

export default App;
