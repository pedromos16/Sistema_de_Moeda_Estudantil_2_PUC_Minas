import { Link } from "react-router-dom";
import {
  isAuthenticated,
  isEmpresa,
  logout,
  getType,
  getId,
} from "../../services/auth";
import "./styles.css";

const Header = () => {
  return (
    <>
      <header>
        {isAuthenticated() ? (
          <nav>
            <h3 style={{ paddingBottom: 0 }}>Sistema de Moedas Estudantil</h3>
            <ul>
              <li>
                Logado como: <strong>{getType()}</strong>
              </li>
              <li>
                <Link to="/dashboard">Listagem</Link>
              </li>
              {isEmpresa() ? (
                <li>
                  <Link to={`/empresa/${getId()}`}>Minha Conta</Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <Link to={`/${getType()}/${getId()}`}>Minha Conta</Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                  }}
                >
                  Sair
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <h2 style={{ paddingBottom: 0 }}>Sistema de Moedas Estudantil</h2>
        )}
      </header>
    </>
  );
};

export default Header;
