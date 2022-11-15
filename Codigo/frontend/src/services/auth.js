export const isAuthenticated = () => {
  return !!localStorage.getItem("id");
};

export const loginAuth = (id, roleId) => {
  localStorage.setItem("id", id);
  localStorage.setItem("roleId", roleId);
};

export const logout = () => {
  localStorage.clear();
};

export const getId = () => {
  return localStorage.getItem("id");
};

export const isAluno = () => {
  const roleId = localStorage.getItem("roleId");
  return roleId === 1 ? true : false;
};

export const isProfessor = () => {
  const roleId = localStorage.getItem("roleId");
  return roleId === 2 ? true : false;
};

export const isEmpresa = () => {
  const roleId = localStorage.getItem("roleId");
  return roleId === 3 ? true : false;
};

export const getType = () => {
  const roleId = localStorage.getItem("roleId");
  if (roleId === 1) {
    return "aluno";
  } else if (roleId === 2) {
    return "professor";
  } else {
    return "empresa";
  }
};
