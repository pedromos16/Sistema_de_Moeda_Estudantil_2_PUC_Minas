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
    <header>
      {isAuthenticated() ? (
        <nav>
          <ul>
            {isEmpresa() ? (
              <li>
                <a href="/cadastrar/vantagem">Cadastrar Vantagem</a>
              </li>
            ) : (
              ""
            )}
            <li>
              <a href={`/${getType()}/${getId()}`}>Minha conta</a>
            </li>
            <li>
              <button onClick={logout()}>Logout</button>
            </li>
          </ul>
        </nav>
      ) : (
        <h2>Sistema de Moedas Estudantil</h2>
      )}
    </header>
  );
};

export default Header;
