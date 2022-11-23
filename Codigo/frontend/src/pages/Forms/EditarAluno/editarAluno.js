import React from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/service";

export default function EditarAluno() {
  const [formData, setFormData] = React.useState({});
  const [aluno, setAluno] = React.useState({});

  const { id } = useParams();

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
    console.log(formData);
    api
      .put(`/aluno/update/id/${id}`, formData)
      .then((res) => (window.location.href = `/aluno/${res.data.id}`));
  }

  React.useEffect(() => {
    api.get(`/aluno/mostrar/id/${id}`).then((res) => {
      setFormData(res.data);
      setAluno(res.data);
    });
  }, [id]);

  return (
    <>
      <div className="centered-container">
        <h1>Editar {aluno.nome}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nome"
            onChange={handleChange}
            name="nome"
            value={formData.nome}
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
          <input
            type="text"
            placeholder="CPF"
            onChange={handleChange}
            name="cpf"
            value={formData.cpf}
          />
          <input
            type="text"
            placeholder="RG"
            onChange={handleChange}
            name="rg"
            value={formData.rg}
          />
          <input
            type="text"
            placeholder="Endereco"
            onChange={handleChange}
            name="endereco"
            value={formData.endereco}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
