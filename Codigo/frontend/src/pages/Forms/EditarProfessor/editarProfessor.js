import React from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/service";

export default function EditarProfessor() {
  const [formData, setFormData] = React.useState({});

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
    api
      .put(`/professor/update/id/${id}`, formData)
      .then((res) => (window.location.href = `/professor/${res.data.id}`));
  }

  React.useEffect(() => {
    api.get(`/professor/mostrar/id/${id}`).then((res) => setFormData(res.data));
  }, [id]);

  return (
    <>
      <h1>Editar {formData.nome}</h1>
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
        <button>Submit</button>
      </form>
    </>
  );
}
