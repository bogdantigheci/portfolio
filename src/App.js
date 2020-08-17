import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Certificates from './components/Certificates/Certificates';
import About from './components/Content/About';
import Projects from './components/Content/Projects';
import ReactTooltip from 'react-tooltip';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = React.useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <div className="App">
      <ReactTooltip />
      <Header drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <About />
      <Projects />
      <Certificates />
      <Footer />
    </div>
  );
};

export default App;
