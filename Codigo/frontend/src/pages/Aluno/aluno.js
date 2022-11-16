import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getId, isAluno, isProfessor } from "../../services/auth";
import api from "../../services/service";

function Aluno() {
  const [aluno, setAluno] = useState({});
  const [transacoes, setTransacoes] = useState({});

  const { id } = useParams();
  const myAccount = isAluno() && getId() === id;

  function handleClick(event) {
    event.preventDefault();
    api
      .delete(`/aluno/deletar/id/${id}`)
      .then(() => (window.location.href = `/`));
  }

  const [formData, setFormData] = useState({
    alunoId: null,
    professorId: null,
    valor: null,
    descricao: "",
  });

  if (isProfessor()) {
    setFormData({
      alunoId: aluno.id,
      professorId: getId(),
      valor: null,
      descricao: "",
    });
  }

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
      .post("/transacao/cadastrar/byprofessor", formData)
      .then((res) => alert("Transacao realizada!"));
  }

  useEffect(() => {
    api.get(`/aluno/mostrar/id/${id}`).then((res) => setAluno(res.data));

    api
      .get(`/transacao/listar/aluno?id=${id}`)
      .then((res) => setTransacoes(res.data));
  }, [id]);

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Aluno</h1>
        <p>{aluno.nome}</p>
        <p>{aluno.email}</p>
        {myAccount ? (
          <>
            <p>Saldo: {aluno.saldo}</p>
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
