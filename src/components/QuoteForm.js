import React from 'react'
import  "./QuoteForm.css"


class QuoteForm extends React.Component {
    constructor(props){
        super(props)
        this.state={character: ""}
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
            onChange={(event) => {
              this.setState({character: event.target.value})
            }}
          />
        </form>
      );
    }
  }
  
//   ReactDOM.render(
//       <QuoteForm />,
//       document.getElementById('root')
//       );
      
    export default QuoteForm ;