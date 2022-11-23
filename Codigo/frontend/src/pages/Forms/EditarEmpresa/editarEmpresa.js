import React from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/service";

export default function EditarEmpresa() {
  const [formData, setFormData] = React.useState({});

  const { id } = useParams();

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
      .put(`/empresa/update/id/${id}`, formData)
      .then((res) => (window.location.href = `/empresa/${res.data.id}`));
  }

  React.useEffect(() => {
    api.get(`/empresa/mostrar/id/${id}`).then((res) => setFormData(res.data));
  }, [id]);

  return (
    <>
      <div className="centered-container">
        <h1>Editar Empresa</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="CNPJ"
            onChange={handleChange}
            name="cnpj"
            value={formData.cnpj}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
