import axios from "axios";

// URL base del backend
const API_BASE = "http://localhost:8080/api";

export const getBorse = () => axios.get(`${API_BASE}/borse`);
export const getCollezioni = () => axios.get(`${API_BASE}/collezioni`);
export const getSconti = () => axios.get(`${API_BASE}/sconti`);
