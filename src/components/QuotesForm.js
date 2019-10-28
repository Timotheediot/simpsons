import React from 'react'
import './QuotesForm.css'

        
        const MAX_LENGTH = 30; // You can change the value
        
        class QuoteForm extends React.Component {
          constructor(props) {
            super(props);
            this.state = {
              character: '',
            };
            this.handleChange = this.handleChange.bind(this);
          }
        
          handleSubmit(event) {
            event.preventDefault();
          }
        
          handleChange(event) {
            // SOLUTION to limit the input to 30 characters: if the new value
            // (event.target.value) is LONGER than the maximum, return from the function
            if (event.target.value.length > MAX_LENGTH) {
              return;
            }
            this.setState({ character: event.target.value });
          }
        
          render() {
            // SOLUTION for border conditional color. Compute a BOOLEAN
            // telling if we've reached the maximum, and use it in input's className
            const maximumReached = this.state.character.length >= MAX_LENGTH;
        
            // SOLUTION for displaying the number of remaining characters
            // We compute it here and use it below
            const numRemaining = MAX_LENGTH - this.state.character.length;
            return (
              <form className="QuoteForm" onSubmit={this.handleSubmit}>
                <label htmlFor="character">Character:</label>
                {/* show a class or another depending on maximumReached */}
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
                <p>
                  You typed: <strong>{this.state.character}</strong>
                </p>
              </form>
            );
        }
    }
        
        export default QuoteForm;




//         import React, { Component } from "react";

// class MyTitleForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { poulet: "Write your title here ..." };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ poulet: event.target.value });
//     const titletochange = this.state.poulet;
//     const titlechanged = titletochange.replace(/\\\*/g, "");
//   }

//   render() {
//     return (
//       <div>
//         <form className="QuoteForm">
//           <label htmlFor="title">Title :</label>
//           <input
//             id="title"
//             type="text"
//             value={this.state.poulet}
//             onChange={this.handleChange}
//           />
//           <h1>
//             {" "}
//             Your Title is : <br />
//             {this.state.poulet}
//           </h1>
//         </form>
//       </div>
//     );
//   }
// }

// export default MyTitleForm;

// / Dedicace à Abdou Vive le poulet ! /;
