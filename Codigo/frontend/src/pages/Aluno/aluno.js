/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getId, isAluno, isProfessor } from "../../services/auth";
import api from "../../services/service";

function Aluno() {
  const [aluno, setAluno] = useState({});
  const [transacoes, setTransacoes] = useState({});

  const { id } = useParams();
  const myAccount = getId() === id && isAluno();

  function handleClick(event) {
    event.preventDefault();
    api
      .delete(`/aluno/deletar/id/${id}`)
      .then(() => (window.location.href = `/`));
  }

  const [formData, setFormData] = useState({
    alunoId: null,
    professorId: getId(),
    valor: null,
    descricao: "",
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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await api.post("/transacao/cadastrar/byprofessor", formData);
      alert(
        `Transacao realizada no valor de ${res.data.valor} moedas para o aluno ${aluno.nome}!`
      );
    } catch (err) {
      alert(err);
      console.log(err);
    }
  }
  useEffect(() => {
    api.get(`/aluno/mostrar/id/${id}`).then((res) => setAluno(res.data));

    api
      .get(`/transacao/listar/aluno?id=${id}`)
      .then((res) => setTransacoes(res.data));

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        alunoId: aluno.id,
      };
    });
  }, [id, aluno]);

  const compras = aluno.compras !== undefined ? aluno.compras : [];

  return (
    <>
      <div className="centered-container">
        <h1>Aluno</h1>
        <table>
          <tr>
            <th>Nome:</th>
            <td>{aluno.nome}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{aluno.email}</td>
          </tr>
          {myAccount ? (
            <>
              <tr>
                <th>CPF:</th>
                <td>{aluno.cpf}</td>
              </tr>
              <tr>
                <th>RG:</th>
                <td>{aluno.rg}</td>
              </tr>
              <tr>
                <th>Endereco:</th>
                <td>{aluno.endereco}</td>
              </tr>
              <tr>
                <th>Saldo:</th>
                <td>{aluno.saldo}</td>
              </tr>
            </>
          ) : (
            ""
          )}
        </table>
        {myAccount ? (
          <>
            <h2>Extrato</h2>
            <div>
              {transacoes.length > 0 ? (
                <>
                  <table>
                    <caption>Transacoes realizadas</caption>
                    <thead>
                      <tr>
                        <th>Professor</th>
                        <th scope="col">Quantidada de moedas</th>
                        <th scope="col">Motivacao</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transacoes.map((transacao) => (
                        <>
                          <tr>
                            <th scope="row">
                              {" "}
                              <Link to={`/professor/${transacao.idProfessor}`}>
                                {transacao.nomeProfessor}
                              </Link>
                            </th>
                            <td>{transacao.valor}</td>
                            <td>
                              {transacao.descricao
                                ? transacao.descricao
                                : "Sem descricao"}
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                "Ainda nao foram realizadas transacoes"
              )}
            </div>
            <div>
              {compras.length > 0 ? (
                <>
                  <table>
                    <caption>Compras realizadas</caption>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Produto</th>
                        <th scope="col">Valor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compras.map((compra) => (
                        <>
                          <tr>
                            <th scope="row">
                              <img
                                src={
                                  compra.vantagens[0].imagem
                                    ? compra.vantagens[0].imagem
                                    : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg"
                                }
                                width="100"
                              />
                            </th>
                            <th scope="row">{compra.vantagens[0].descricao}</th>
                            <td>{compra.valor}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                "Voce ainda nao comprou nada"
              )}
            </div>{" "}
            <br></br>
            <button onClick={(e) => handleClick(e)}> Deletar </button>
            <Link to={`/editar/aluno/${id}`}>Editar Aluno</Link>
          </>
        ) : (
          ""
        )}
        {isProfessor() ? (
          <>
            {" "}
            <h1>Enviar moedas</h1>
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
            </form>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Aluno;
