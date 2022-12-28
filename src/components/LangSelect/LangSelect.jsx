import Select from 'react-select';
import { LOCALES } from '../../i18n/locales';

import { LangWrapper } from './LangSelect.styled';

const LangSelect = ({ currentLocale, handleChange }) => {
  const languages = [
    { label: 'Українська', value: LOCALES.UKRAINIAN },
    { label: 'Руский', value: LOCALES.RUSSIAN },
    { label: 'English', value: LOCALES.ENGLISH },
  ];

  const colorStyles = {
    control: styles => ({
      ...styles,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid #ff7c0a',
      boxShadow: '0px 2px 8px #ff7c0a',
      backdropFilter: 'blur(11.25px)',
      borderRadius: '10px',
      cursor: 'pointer',
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      color: isSelected ? '#ff7c0a' : '#000000',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    }),
    singleValue: styles => ({ ...styles, color: '#c2c2c2' }),
  };

  function defaultLang() {
    if (!currentLocale) {
      return languages[0];
    } else {
      return languages.find(option => option.value === currentLocale);
    }
  }

  return (
    <LangWrapper data-nosnippet>
      <Select
        defaultValue={defaultLang()}
        name="lang"
        options={languages}
        onChange={handleChange}
        styles={colorStyles}
      />
    </LangWrapper>
  );
};

export default LangSelect;
