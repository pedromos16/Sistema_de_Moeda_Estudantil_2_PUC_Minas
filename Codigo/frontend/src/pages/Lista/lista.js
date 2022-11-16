import { useEffect, useState } from "react";
import { isProfessor } from "../../services/auth";
import api from "../../services/service";

function Lista() {
  const [alunos, setAlunos] = useState([{}]);
  const [empresas, setEmpresas] = useState([{}]);
  const [professores, setProfessores] = useState([{}]);

  useEffect(() => {
    api.get("/aluno/listar").then((res) => setAlunos(res.data));
    api.get("/empresa/listar").then((res) => setEmpresas(res.data));
    api.get("/professor/listar").then((res) => setProfessores(res.data));
  }, []);

  return (
    <>
      <div style={{ textAligment: "center" }}>
        <h1>Alunos</h1>
        <div>
          {alunos.length > 0 ? (
            <>
              <table>
                <caption>Alunos cadastrados no sistema</caption>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th scope="col">Email</th>
                    {isProfessor ? <th scope="col">Acoes</th> : ""}
                  </tr>
                </thead>
                <tbody>
                  {alunos.map((aluno) => (
                    <>
                      <tr>
                        <th scope="row">
                          {" "}
                          <a href={`/aluno/${aluno.id}`}>{aluno.nome}</a>
                        </th>
                        <td>{aluno.email}</td>
                        {isProfessor ? (
                          <td>
                            {" "}
                            <a href={`/aluno/${aluno.id}`}>Enviar Moedas</a>
                          </td>
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
            "Nao existem alunos cadastrados"
          )}
        </div>{" "}
        <a href="/cadastro/aluno">Cadastrar Aluno</a>
        <h1>Empresas</h1>
        <div>
          <div>
            {empresas.length > 0 ? (
              <>
                <table>
                  <caption>Empresas cadastradas no sistema</caption>
                  <thead>
                    <tr>
                      <th>CNPJ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {empresas.map((empresa) => (
                      <>
                        <tr>
                          <th scope="row">
                            {" "}
                            <a href={`/empresa/${empresa.id}`}>
                              {empresa.cnpj}
                            </a>
                          </th>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              "Nao existem empresas cadastradas"
            )}
          </div>{" "}
        </div>{" "}
        <a href="/cadastro/empresa">Cadastrar Empresa</a>
        <h1>Professores</h1>
        <div>
          {professores.length > 0 ? (
            <>
              <table>
                <caption>Professores cadastrados no sistema</caption>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {professores.map((professor) => (
                    <>
                      <tr>
                        <th scope="row">
                          {" "}
                          <a href={`/professor/${professor.id}`}>
                            {professor.nome}
                          </a>
                        </th>
                        <td>{professor.email}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            "Nao existem professores cadastrados"
          )}
        </div>{" "}
      </div>
    </>
  );
}

export default Lista;
