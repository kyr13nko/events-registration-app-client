import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/";

export const fetchEvents = () => axios.get("events");

export const fetchEventById = (id) => axios.get(`events/${id}`);

export const fetchAddMember = (id, values) => axios.post(`events/${id}`, values);
