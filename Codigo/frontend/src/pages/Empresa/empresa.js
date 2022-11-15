import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getId, isEmpresa } from "../../services/auth";
import api from "../../services/service";

function Empresa() {
  const [empresa, setEmpresa] = useState({});

  const { id } = useParams();
  const myAccount = isEmpresa() && getId() === id;

  function handleClick(event) {
    event.preventDefault();
    api
      .delete(`/professor/deletar/id/${id}`)
      .then(() => (window.location.href = `/`));
  }

  useEffect(() => {
    api.get(`/empresa/mostrar/id/${id}`).then((res) => setEmpresa(res.data));
  }, [id]);

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Empresa</h1>
        <p>{empresa.cnpj}</p>
        {myAccount ? (
          <>
            <button onClick={(e) => handleClick(e)}> Deletar </button>
            <a href={`/editar/empresa/${id}`}>Editar Empresa</a>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Empresa;
