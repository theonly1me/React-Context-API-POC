import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
// import languageContext from '../context/languageContext';
import { LanguageStore } from '../context/languageContext';

const App = () => {
  return (
    <LanguageStore>
      <div className="ui container">
        <LanguageSelector />
        <UserCreate />
      </div>
    </LanguageStore>
  );
};

export default App;
