import React from "react";
import api from "../../services/service";

export default function Transacao() {
  const [formData, setFormData] = React.useState({
    alunoId: null,
    professorId: null,
    valor: null,
    descricao: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    api
      .post("/transacao/cadastrar/byprofessor", formData)
      .then((res) => alert("Transacao realizada!"));
  }

  return (
    <>
      <h1>Realizar transacao</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Aluno ID"
          onChange={handleChange}
          name="alunoId"
          value={formData.alunoId}
        />
        <input
          type="text"
          placeholder="Professor ID"
          onChange={handleChange}
          name="professorId"
          value={formData.professorId}
        />
        <input
          type="text"
          placeholder="Valor"
          onChange={handleChange}
          name="valor"
          value={formData.valor}
        />
        <input
          type="text"
          placeholder="Descricao"
          onChange={handleChange}
          name="descricao"
          value={formData.descricao}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
