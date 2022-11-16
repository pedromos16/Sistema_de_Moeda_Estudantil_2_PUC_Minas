import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getId, isEmpresa } from "../../services/auth";
import api from "../../services/service";

function Empresa() {
  const [empresa, setEmpresa] = useState({});
  const [formData, setFormData] = useState({
    valor: null,
    descricao: "",
  });

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
      .post("/vantagem/cadastrar", { empresaId: `${id}`, ...formData })
      .then(() => window.location.reload(true));
  }

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Empresa</h1>
        <p>{empresa.cnpj}</p>

        {myAccount ? (
          <>
            <button onClick={(e) => handleClick(e)}> Deletar </button>
            <a href={`/editar/empresa/${id}`}>Editar Empresa</a>
            <h3>Cadastrar Vantagem</h3>
            <form onSubmit={handleSubmit}>
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
              <button>Enviar</button>
            </form>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Empresa;
