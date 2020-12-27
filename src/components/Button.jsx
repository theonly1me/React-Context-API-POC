import React, { useContext } from 'react';
import languageContext from '../context/languageContext';

const Button = () => {
  //   const language = useContext(languageContext);
  //   const text = language === 'english' ? 'Submit' : 'Voorleggen';

  return (
    <button className="ui button primary">
      <languageContext.Consumer>
        {value => (value[0] === 'english' ? 'Submit' : 'Voorleggen')}
      </languageContext.Consumer>
    </button>
  );
};

export default Button;
