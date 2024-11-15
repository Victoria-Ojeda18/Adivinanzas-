import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AdivinanzaContainer from './components/AdivinanzasContainer.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AdivinanzaContainer />
      <Footer />
    </div>
  );
};

export default App;
