import axios from "axios";
import { Adapter } from ".";

export const restAdapter: Adapter = () => ({
  findRecord(type, id) {
    return axios.get(`${type}/${id}`);
  },
  findAll(type) {
    return axios.get(type);
  },
  deleteRecord(type, id) {
    return axios.delete(`${type}/${id}`);
  },
  updateRecord(type, id, payload) {
    return axios.patch(`${type}/${id}`, payload);
  },
  createRecord(type, payload) {
    return axios.post(`${type}`, payload);
  }
});
