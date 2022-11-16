import React from "react";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../../services/auth";
import api from "../../services/service";

export default function SignIn() {
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
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
      console.log(res.data);
    } catch (err) {
      alert(err.response.data);
    }
  }

  return (
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
