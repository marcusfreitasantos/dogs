import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {data ? (
          <div style={{ display: 'flex' }}>
            <Link className={styles.login} to="/conta">
              <p>{data.nome}</p>
              <button onClick={userLogout}>Sair</button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex' }}>
            <Link className={styles.login} to="/login">
              Login /
            </Link>
            <Link to="/login/criar"> Criar</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
