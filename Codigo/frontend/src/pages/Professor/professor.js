import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getId, isProfessor } from "../../services/auth";
import api from "../../services/service";

function Professor() {
  const [professor, setProfessor] = useState({});
  const [transacoes, setTransacoes] = useState({});

  const { id } = useParams();
  const myAccount = getId() === id && isProfessor();

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

    api
      .get(`/transacao/listar/professor?id=${id}`)
      .then((res) => setTransacoes(res.data));
  }, [id]);

  return (
    <>
      <div className="centered-container">
        <h1>Professor</h1>
        <table>
          <tr>
            <th>Nome:</th>
            <td>{professor.nome}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{professor.email}</td>
          </tr>
          {myAccount ? (
            <>
              <tr>
                <th>CPF:</th>
                <td>{professor.cpf}</td>
              </tr>
              <tr>
                <th>Moedas:</th>
                <td>{professor.moedas}</td>
              </tr>
            </>
          ) : (
            ""
          )}
        </table>
        <br></br>
        {myAccount ? (
          <>
            <h2>Transacoes</h2>
            <div>
              {transacoes.length > 0 ? (
                <>
                  <table>
                    <caption>Transacoes realizadas</caption>
                    <thead>
                      <tr>
                        <th>Aluno</th>
                        <th scope="col">Quantidada de moedas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transacoes.map((transacao) => (
                        <>
                          <tr>
                            <th scope="row">
                              {" "}
                              <Link to={`/aluno/${transacao.idAluno}`}>
                                {transacao.nomeAluno}
                              </Link>
                            </th>
                            <td>{transacao.valor}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                "Ainda nao foram realizadas transacoes"
              )}
            </div>{" "}
            <br></br>
            <div>
              <button onClick={(e) => handleClick(e)}> Deletar </button>
              <Link to={`/editar/professor/${id}`}>Editar Professor</Link>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Professor;
