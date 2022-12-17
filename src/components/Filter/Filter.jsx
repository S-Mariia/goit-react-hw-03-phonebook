import PropTypes from 'prop-types';
import { Paragraph, Input } from './Filter.styled';

export const Filter = ({ onChange, filterValue }) => {
    return <>
        <Paragraph>Find contacts by name</Paragraph>
        <Input
          onChange={onChange}
          type="text"
        name="filter"
        placeholder='Enter name'
          value={filterValue}
        /></>
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
}