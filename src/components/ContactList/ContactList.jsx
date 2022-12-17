import PropTypes from 'prop-types';
import { ContactItem } from 'components/ConcactItem/ConcactItem';
import { Table } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Table>
      <tbody>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          item={contact}
          deleteContact={deleteContact}
        />
        ))}
      </tbody>
    </Table>
          
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
