import api from "./api-helper";

export const readAllModifications = async () => {
  const resp = await api.get("/modifications");
  return resp.data;
};

export const readOneModification = async (id) => {
  const resp = await api.get(`/modifications/${id}`);
  return resp.data;
};

export const createNewModification = async (id, modificationData) => {
  const resp = await api.post(`/vehicles/${id}/modifications`, {
    modification: modificationData,
  });
  return resp.data;
};

export const updateModification = async (id, modificationData) => {
  const resp = await api.put(`/modifications/${id}`, {
    modification: modificationData,
  }); //for our strong params within vehicle controller
  return resp.data;
};

export const deleteModification = async (id) => {
  const resp = await api.delete(`modifications/${id}`);
  return resp;
};
