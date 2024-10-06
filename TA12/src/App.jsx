import React from 'react';
import { UserProvider } from './components/UserContext'; // Proveedor del contexto
import UserDisplay from './components/UserDisplay'; // Componente que muestra el nombre de usuario
import UserInput from './components/UserInput'; // Componente para actualizar el nombre de usuario
import styles from './components/UserDisplay/index.module.css'; // Estilos

const App = () => {
  return (
    <UserProvider>
        <h2 className={styles.title}>Bienvenido a la aplicación</h2>
        <UserInput /> {/* Componente para escribir el nombre */}
        <UserDisplay /> {/* Componente que muestra el nombre */}
    </UserProvider>
  );
};

export default App;