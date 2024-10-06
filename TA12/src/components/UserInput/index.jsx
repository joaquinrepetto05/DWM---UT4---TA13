import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import styles from '../UserDisplay/index.module.css';

const UserInput = () => {
  const { setUserName } = useContext(UserContext);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className={styles.userInputContainer}>
      <input
        className={styles.userInput}
        type="text"
        placeholder="Escribe tu nombre"
        onChange={handleChange}
      />
    </div>
  );
};

export default UserInput;
