import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
  const { ticket } = props;    { /* "Note that we use [Object Destructuring] ... to derive the 'ticket' object from our props. Otherwise, for a ticket attribute like 'location', we'd need to say 'props.ticket.location' instead of just 'ticket.location'. ...",  (Lsn 35, "Update 'TicketDetail' to Render 'SelectedTicket'"). */ } 

  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <hr/>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object
};

export default TicketDetail;