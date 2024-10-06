import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import styles from './index.module.css';

const UserDisplay = () => {
  const { userName } = useContext(UserContext);

  return (
    <div className={styles.userDisplayContainer}>
      <h2 className={styles.userDisplayText}>
        Usuario: <span className={styles.userDisplayText}>{userName}</span>
      </h2>
    </div>
  );
};

export default UserDisplay;
