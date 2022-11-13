import React from "react";
import api from "../../services/service";

export default function Transacao() {
  const [formData, setFormData] = React.useState({
    alunoId: 0,
    professorId: 0,
    valor: 0.0,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    api
      .post("/transacao/cadastrar/byprofessor", formData)
      .then((res) => alert("Transacao realizada!"));
    console.log(formData);
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
        <button>Submit</button>
      </form>
    </>
  );
}
