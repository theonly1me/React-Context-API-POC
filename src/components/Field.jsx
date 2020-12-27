import React, { useContext } from 'react';
import languageContext from '../context/languageContext';

const Field = () => {
  const [language, setLanguage] = useContext(languageContext);
  const text = language === 'english' ? 'Name' : 'Naam';
  return (
    <div className="ui field">
      <label>{text}</label>
      <input type="text" />
    </div>
  );
};

export default Field;
