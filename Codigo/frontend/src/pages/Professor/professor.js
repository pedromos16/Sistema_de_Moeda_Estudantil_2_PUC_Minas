import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/service";

function Professor() {
  const [professor, setProfessor] = useState({});

  const { id } = useParams();

  function handleClick(event) {
    event.preventDefault();
    api
      .delete(`/professor/deletar/id/${id}`)
      .then(() => (window.location.href = `/`));
  }

  useEffect(() => {
    api
      .get(`/professor/mostrar/id/${id}`)
      .then((res) => setProfessor(res.data));
  }, [id]);

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Professor</h1>
        <p>{professor.nome}</p>
        <p>{professor.email}</p>
        <button onClick={(e) => handleClick(e)}> Deletar </button>
        <a href={`/editar/professor/${id}`}>Editar Professor</a>
      </div>
    </>
  );
}

export default Professor;
