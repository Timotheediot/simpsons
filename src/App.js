import React from 'react';
import Navbar from './components/Navbar';

import QuoteForm from './components/QuoteForm';
import Quoteslist from './components/Quoteslist';


function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteForm />
      <Quoteslist />
    </div>
  );
}

export default App;
