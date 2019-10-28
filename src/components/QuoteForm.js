import React from 'react'
import  "./QuoteForm.css"

const MAX_LENGTH = 30; // You can change the value

class QuoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state={character: ""}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange =(event) => {
        if (event.target.value.length > MAX_LENGTH)
            return;
        this.setState({character: event.target.value})   
    }

    handleSubmit(event) {
        event.preventDefault();
      }
    


    render() {

    const maximumReached = this.state.character.length >= MAX_LENGTH;
    const numRemaining = MAX_LENGTH - this.state.character.length;
      return (
        <form
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
          className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
            id="name"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
          <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>
          <p><strong>You typed: {this.state.character}</strong> </p>
        </form>
      );
    }
  }
  
//   ReactDOM.render(
//       <QuoteForm />,
//       document.getElementById('root')
//       );
      
    export default QuoteForm ;