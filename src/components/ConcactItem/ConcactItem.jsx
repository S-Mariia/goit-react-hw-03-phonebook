import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdDelete } from 'react-icons/md';
import { Tr, Td, Btn } from './ConcactItem.styled';

export const ContactItem = ({ item: { id, name, number }, deleteContact }) => {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{number}</Td>
      <Td>
        <Btn onClick={() => deleteContact(id)} type="button">
          <IconContext.Provider
            value={{
              size: 20,
            }}
          >
            <MdDelete />
          </IconContext.Provider>
        </Btn>
      </Td>
    </Tr>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
