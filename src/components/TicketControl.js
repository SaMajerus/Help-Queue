import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail'; 

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [],
      selectedTicket: null // new code
    };  
  }

  handleClick = () => {  
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  /* Handles the form submission process (for adding a new ticket to the list). */
  handleAddingNewTicketToList = (newTicket) => {   
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                  formVisibleOnPage: false });
  }

  /* Handles selection of a ticket with a given ID. */
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    
    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} />
      buttonText = "Return to Ticket List";
      // While our 'TicketDetail' component only takes placeholder data, we will eventually be passing the value of 'selectedTicket' as a Prop.
    }
    else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to 'else if'.
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}  />;
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      // Because a User will actually be clicking on the ticket in the Ticket component, we will need to pass our new 'handleChangingSelectedTicket' method as a Prop.
      buttonText = "Add Ticket";
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
