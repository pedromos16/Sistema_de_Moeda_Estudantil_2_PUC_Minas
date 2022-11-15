import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/header";
import CadastrarAluno from "../pages/Forms/CadastrarAluno/cadastrarAluno";
import CadastrarEmpresa from "../pages/Forms/CadastrarEmpresa/cadastrarEmpresa";
import SignIn from "../pages/Login/login";
import Lista from "../pages/Lista/lista";
import RouterAuth from "./routerAuth";

const Rotas = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route
        path="/cadastro/aluno"
        caseSensitive={false}
        element={<CadastrarAluno />}
      />
      <Route
        path="/cadastro/empresa"
        caseSensitive={false}
        element={<CadastrarEmpresa />}
      />
      <Route path="/login" caseSensitive={false} element={<SignIn />} />
      <Route
        path="/dashboard"
        caseSensitive={false}
        element={
          <RouterAuth>
            <Lista />
          </RouterAuth>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Rotas;
