import React from 'react';
import Navbar from './components/Navbar';
import QuotesForm from './components/QuotesForm';
import Quoteslist from './components/Quoteslist';
function App() {
  return (
    <div className="App">
      <Navbar />
      <QuotesForm/>
      <Quoteslist />
    </div>
  );
}

export default App;
