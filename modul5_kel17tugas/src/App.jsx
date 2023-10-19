import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { PokemonProvider } from './components/PokemonContext';
import PageOne from './components/Page1';
import PageTwo from './components/Page2';

function App() {
  return (
    <Router>
      <PokemonProvider>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page2" element={<PageTwo />} />
        </Routes>
      </PokemonProvider>
    </Router>
  );
}

export default App;