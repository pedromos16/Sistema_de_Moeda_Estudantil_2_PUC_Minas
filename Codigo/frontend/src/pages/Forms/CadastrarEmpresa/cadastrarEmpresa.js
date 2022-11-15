import React from "react";
import api from "../../../services/service";

export default function CadastrarEmpresa() {
  const [formData, setFormData] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cnpj: "",
    saldo: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    api
      .post("/empresa/cadastrar", formData)
      .then((res) => (window.location.href = `/empresa/${res.data.id}`));
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
        <h1>Cadastrar Empresa</h1>
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
            type="text"
            placeholder="Nome"
            onChange={handleChange}
            name="nome"
            value={formData.nome}
          />
          <input
            type="text"
            placeholder="CNPJ"
            onChange={handleChange}
            name="cnpj"
            value={formData.cnpj}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={handleChange}
            name="senha"
            value={formData.senha}
          />
          <button>Cadastrar</button>
        </form>
      </div>
    </>
  );
}
