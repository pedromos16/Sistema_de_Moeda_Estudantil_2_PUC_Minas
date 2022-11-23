/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getId, isAluno, isEmpresa } from "../../services/auth";
import api from "../../services/service";

function Empresa() {
  const [empresa, setEmpresa] = useState({});

  const { id } = useParams();
  const myAccount = getId() === id && isEmpresa();

  const [formData, setFormData] = useState({
    empresaId: id,
    valor: null,
    descricao: "",
    imagem: "",
  });

  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    api.delete(`/professor/deletar/id/${id}`).then(() => navigate("/login"));
  }

  useEffect(() => {
    api.get(`/empresa/mostrar/id/${id}`).then((res) => {
      setEmpresa(res.data);
    });
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
      .post("/vantagem/cadastrar", formData)
      .then(() => window.location.reload(true));
  }

  async function handleCompra(vantagemID) {
    try {
      await api.post("/compra/cadastrar", {
        alunoId: id,
        vantagensIds: [vantagemID],
      });
      alert("Compra realizada!");
    } catch (err) {
      alert(err.response.data);
    }
  }

  async function handleDelete(vantagemID) {
    try {
      await api.delete(`/aluno/deletar/id/${vantagemID}`);
      window.location.reload(true);
    } catch (err) {
      alert(err.response.data);
    }
  }

  const vantagens = empresa.vantagems !== undefined ? empresa.vantagems : [];
  return (
    <>
      <div className="centered-container">
        <h1>Empresa {empresa.nome}</h1>
        <table>
          <tr>
            <th>Nome:</th>
            <td>{empresa.nome}</td>
          </tr>
          <tr>
            <th>CNPJ:</th>
            <td>{empresa.cnpj}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{empresa.email}</td>
          </tr>
          {myAccount ? (
            <tr>
              <th>Saldo:</th>
              <td>{empresa.saldo}</td>
            </tr>
          ) : (
            ""
          )}
        </table>
        <br></br>
        <h2>Vantagens</h2>
        {/* =========
            VANTAGENS
        ========= */}
        {vantagens.length > 0 ? (
          <>
            <table>
              <caption>Vantagens cadastradas no sistema</caption>
              <thead>
                <tr>
                  <th></th>
                  <th>Descricao</th>
                  <th>Valor</th>
                  {isAluno() || myAccount ? <th scope="row">Acoes</th> : ""}
                </tr>
              </thead>
              <tbody>
                {vantagens.map((vantagem) => (
                  <>
                    <tr>
                      <th scope="row">
                        <img
                          src={
                            vantagem.imagem
                              ? vantagem.imagem
                              : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg"
                          }
                          width="100"
                        />
                      </th>
                      <th scope="row">{vantagem.descricao}</th>
                      <th scope="row">{vantagem.valor}</th>
                      {isAluno() ? (
                        <th scope="row">
                          <button
                            type="button"
                            onClick={() => {
                              handleCompra(vantagem.id);
                            }}
                          >
                            Comprar
                          </button>
                        </th>
                      ) : (
                        ""
                      )}
                      {myAccount ? (
                        <th scope="row">
                          {" "}
                          <button
                            type="button"
                            onClick={() => {
                              handleDelete(vantagem.id);
                            }}
                          >
                            Deletar
                          </button>
                        </th>
                      ) : (
                        ""
                      )}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          "Nao existem vantagens cadastradas"
        )}
        {/* =========
            ACOES
        ========= */}
        {myAccount ? (
          <>
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
              <input
                type="text"
                placeholder="URL Imagem"
                onChange={handleChange}
                name="imagem"
                value={formData.imagem}
              />
              <button>Enviar</button>
            </form>
            <br></br>
            <div>
              <button onClick={(e) => handleClick(e)}> Deletar </button>
              <Link to={`/editar/empresa/${id}`}>Editar Empresa</Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Empresa;
