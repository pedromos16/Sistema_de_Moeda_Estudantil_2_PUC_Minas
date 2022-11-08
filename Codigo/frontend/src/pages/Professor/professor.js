import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/service";

function Professor() {
  const [professor, setProfessor] = useState({});
  const [transacoes, setTransacoes] = useState({});

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

    api
      .get(`/transacao/listar/professor?id={${id}}`)
      .then((res) => setTransacoes(res.data));
  }, [id]);

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Professor</h1>
        <p>{professor.nome}</p>
        <p>{professor.email}</p>
        <p>{professor.moedas}</p>
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
                          <a href={`/aluno/${transacao.idAluno}`}>
                            {transacao.nomeAluno}
                          </a>
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
        <button onClick={(e) => handleClick(e)}> Deletar </button>
        <a href={`/editar/professor/${id}`}>Editar Professor</a>
      </div>
    </>
  );
}

export default Professor;
