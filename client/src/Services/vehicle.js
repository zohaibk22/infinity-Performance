import api from "./api-helper";

export const readAllVehicles = async () => {
  const resp = await api.get("/vehicles");
  return resp.data;
};

export const readOneVehicle = async (id) => {
  const resp = await api.get(`/vehicles/${id}`);
  return resp.data;
};

export const createNewVehicle = async (vehicleData) => {
  const resp = await api.post(`/vehicles`, { vehicle: vehicleData });
  return resp.data;
};

export const updateVehicle = async (id, vehicleData) => {
  const resp = await api.put(`/vehicles/${id}`, { vehicle: vehicleData }); //for our strong params within vehicle controller
  return resp.data;
};

export const deleteVehicle = async (id) => {
  const resp = await api.delete(`/vehicles/${id}`);
  return resp;
};

export const addModification = async (id, modification_id) => {
  const resp = await api.get(
    `/modifications/${modification_id}/vehicles/${id}`
  );
  return resp.data;
};
