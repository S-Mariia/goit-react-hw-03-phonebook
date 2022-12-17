import PropTypes from 'prop-types';
import { Component } from 'react';
import { IconContext } from 'react-icons';
import { IoMdPerson } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';
import { Form, Label, Input, Button, Wrap } from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = (type, value) => {
    this.setState({ [type]: value });
  };

  handleFormSubmit = evt => {
    const { name, number } = this.state;
    const { onSubmit } = this.props;

    onSubmit({ evt, name, number });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Label>
          <Wrap>
            <IconContext.Provider
              value={{
                size: 20,
              }}
            >
              <IoMdPerson />
            </IconContext.Provider>
            Name
          </Wrap>
          <Input
            onChange={evt => this.handleInputChange('name', evt.target.value)}
            type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Wrap>
            <IconContext.Provider
              value={{
                size: 20,
              }}
            >
              <BsTelephoneFill />
            </IconContext.Provider>
            Phone
          </Wrap>
          <Input
            onChange={evt => this.handleInputChange('number', evt.target.value)}
            type="tel"
            name="number"
            value={number}
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
