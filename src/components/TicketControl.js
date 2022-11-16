import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    //this.handleClick = this.handleClick.bind(this);  //Translation:  "Whenever 'this.handleClick' is called, it should have the current context of 'this' bound to it. Because this line of code is inside the constructor, this is an instance of the class itself, which is exactly what we need. That way, when this.handleClick is called in the DOM, our application still knows what this should be", (Lsn 24).  
  }

  //handleClick() {
  handleClick = () => {   //"...we don't need to use 'bind' anymore [b/c] arrow functions automatically bind functions to their [current] lexical scope", (Lsn 24). 
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List"; // new code
    } else {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */ }
      </React.Fragment>
    );
  }

}

export default TicketControl;
