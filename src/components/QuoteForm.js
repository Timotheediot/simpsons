import React from 'react'
import  "./QuoteForm.css"


class QuoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state={character: ""}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange =(event) => {
        this.setState({character: event.target.value})
        
    }

    handleSubmit(event) {
        event.preventDefault();
      }
    

    render() {
      return (
        <form
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            id="name"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
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