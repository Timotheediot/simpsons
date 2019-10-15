import React from 'react';

import './QuoteCard.css'

const image = "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png"


class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          favorite: false
        }
    }

    render() {
      return (
        <div className="QuoteCard">
            {this.props.id}
            <img src= {this.props.image}/>
            < div className="figcaption">
                <p className="blockquote">
                {this.props.quote}
                </p>
                <p>
                <cite>{this.props.character}</cite>
                <span>&#9733;</span>
                </p>
            </div>

         </div>
      );
    }
  }


export default QuoteCard;