import React, { useContext } from 'react';
import languageContext from '../context/languageContext';

const LanguageSelector = ({ onLanguageChange }) => {
  const [language, setLanguage] = useContext(languageContext);
  return (
    <div>
      Select a Language:
      <i onClick={() => setLanguage('english')} className="flag us"></i>
      <i onClick={() => setLanguage('dutch')} className="flag nl"></i>
    </div>
  );
};

export default LanguageSelector;
