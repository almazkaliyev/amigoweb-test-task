import React from 'react';
import ReactSelect, { components } from 'react-select';

import ChevronDownIcon from '../icons/ChevronDownIcon';

const languageOptions = [
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'Английский' },
  { value: 'cn', label: 'Китайский' },
  { value: 'es', label: 'Испанский' },
];

const styles = {
  control: (_, { isFocused }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 11,
    paddingLeft: 15,
    paddingBottom: 9,
    border: isFocused ? '2px solid #0880ae' : '1px solid #dbe2ea',
    borderRadius: 6,
    cursor: 'pointer',
    boxShadow: 'none',
    ':hover': {
      border: isFocused ? '2px solid #0880ae' : '1px solid #dbe2ea',
    },
  }),
  dropdownIndicator: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  input: () => ({ color: 'transparent' }),
  menu: () => ({
    position: 'absolute',
    top: '100%',
    width: '100%',
    zIndex: 1,
    marginTop: 4,
    paddingTop: 12,
    paddingBottom: 12,
    border: '1px solid #dbe2ea',
    borderRadius: 6,
    backgroundColor: 'white',
    boxShadow:
      '0 4px 8px rgba(44, 39, 56, .04), 0 20px 20px rgba(44, 39, 56, .04)',
  }),
  option: (_, { isFocused }) => ({
    padding: '12px 15px',
    color: '#756f86',
    backgroundColor: isFocused ? '#ebf4f8' : 'white',
    cursor: 'pointer',
  }),
  placeholder: (_, { isFocused }) => ({
    color: isFocused ? '#2c2738' : '#7c9cbf',
    lineHeight: '30px',
  }),
  singleValue: () => ({ lineHeight: '30px' }),
  valueContainer: () => ({ display: 'flex' }),
};

const DropdownIndicator = (props) => (
  <components.DropdownIndicator {...props}>
    <ChevronDownIcon />
  </components.DropdownIndicator>
);

export default React.forwardRef((props, ref) => (
  <ReactSelect
    components={{ DropdownIndicator }}
    options={languageOptions}
    placeholder="Язык"
    ref={ref}
    styles={styles}
    {...props}
  />
));
