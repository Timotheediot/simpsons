import React from 'react';

import './QuoteCard.css'

const image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png"

const QuoteCard = (props) => {
    return (
        <div className="QuoteCard">
           <img src= {props.image}/>
           < div className="figcaption">
      <p className="blockquote">
       {props.quote}
      </p>
      <cite> {props.character}</cite>
    </div>

        </div>
    );
}
export default QuoteCard;