import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';

function App() {
  return (
    <div className="App">
      <Navbar />

      <QuoteCard
      quote	="Me fail English? That's unpossible."
      character="Bart Simpsons"
      image="https://images-na.ssl-images-amazon.com/images/I/61Lfb%2Bsv5IL._SY679_.jpg"
      characterDirection="Left"
      />

      <QuoteCard
      quote="Me fail English? That's unpossible."
      character="Jean Claudo"
      image="https://anniversaire-celebrite.com/upload/250x333/charles-montgomery-burns-250.jpg"
      characterDirection="Left"
      />

      <QuoteCard
      quote="Oh Yeah!"
      character="Duffman"
      image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png"
      characterDirection="Left"/>

      <QuoteCard
      quote="Nothing you say can upset us. We're the MTV generation."
      character="John Kurt"
      image="http://www.simpsonspark.com/images/persos/contributions/nelson-muntz-24965.jpg"
      characterDirection="Right"/>
    </div>
  );
}

export default App;
