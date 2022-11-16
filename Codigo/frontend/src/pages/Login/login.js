import React from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import { isAuthenticated, loginAuth } from "../../services/auth";
import api from "../../services/service";

function SignIn() {
  const [formData, setFormData] = React.useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await api.post("/login", formData);
      loginAuth(res.data.id, res.data.roleId);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response.data);
    }
  }

  return isAuthenticated() ? (
    <Navigate to={{ pathname: "/dashboard" }} />
  ) : (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Entrar no sistema</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gridGap: 10,
            width: 500,
          }}
        >
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={handleChange}
            name="senha"
            value={formData.senha}
            required
          />
          <button>Entrar</button>
        </form>
        <div style={{ display: "flex", alignItems: "center", gridGap: 10 }}>
          <a href="/cadastro/aluno">Fazer cadastro como Aluno</a>
          <p>ou</p>
          <a href="/cadastro/empresa">Fazer cadastro como Empresa</a>
        </div>
      </div>
    </>
  );
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter(SignIn);
