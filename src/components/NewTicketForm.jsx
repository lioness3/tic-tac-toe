import React from 'react';
import PropTypes from 'prop-types';
// import { v4 } from 'uuid';
import Moment from 'moment';
// import Ticket from "../models/Ticket.js";
import { connect } from 'react-redux';


class NewTicketForm extends React.Component {
  let _names = null;
  let _location = null;
  let _issue = null;

  handleNewTicketFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const action = {
      type: 'ADD_TICKET'
    }
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

NewTicketForm = connect()(NewTicketForm);

export default NewTicketForm;
