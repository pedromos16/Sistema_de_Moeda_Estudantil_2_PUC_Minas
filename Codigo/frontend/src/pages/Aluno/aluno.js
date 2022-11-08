import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/service";

function Aluno() {
  const [aluno, setAluno] = useState({});
  const [transacoes, setTransacoes] = useState({});

  const { id } = useParams();

  function handleClick(event) {
    event.preventDefault();
    api
      .delete(`/aluno/deletar/id/${id}`)
      .then(() => (window.location.href = `/`));
  }

  useEffect(() => {
    api.get(`/aluno/mostrar/id/${id}`).then((res) => setAluno(res.data));

    api
      .get(`/transacao/listar/aluno?id={${id}}`)
      .then((res) => setTransacoes(res.data));
  }, [id]);

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Aluno</h1>
        <p>{aluno.nome}</p>
        <p>{aluno.email}</p>
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
                  </tr>
                </thead>
                <tbody>
                  {transacoes.map((transacao) => (
                    <>
                      <tr>
                        <th scope="row">
                          {" "}
                          <a href={`/professor/${transacao.idProfessor}`}>
                            {transacao.nomeProfessor}
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
        <a href={`/editar/aluno/${id}`}>Editar Aluno</a>
      </div>
    </>
  );
}

export default Aluno;
