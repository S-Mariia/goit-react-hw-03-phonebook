import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { MainTitle, Title } from './App.styled';

const LS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    if (contacts !== null) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = ({ evt, name, number }) => {
    evt.preventDefault();
    const alreadyInList = Boolean(
      this.state.contacts.find(contact => contact.name === name)
    );
    if (alreadyInList) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => {
      const newList = contacts.filter(contact => contact.id !== id);
      return {
        contacts: newList,
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.handleSubmit} />

        <Title>Contacts</Title>
        <Filter filterValue={filter} onChange={this.handleFilter} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
