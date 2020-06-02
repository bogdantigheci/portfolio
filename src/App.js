import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Certificates from './components/Certificates/Certificates';
import About from './components/Content/About';
import Projects from './components/Content/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
