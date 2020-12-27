import React, { useState } from 'react';
//Creating a Context Object with default value (param)

const Context = React.createContext('english');

export const LanguageStore = props => {
  const [language, setLanguage] = useState('english');

  return (
    <Context.Provider value={[language, setLanguage]}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
