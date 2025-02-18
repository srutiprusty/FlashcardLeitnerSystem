import axios from "axios";
import dayjs from "dayjs";

// Create an axios instance with a base URL
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Correct API functions using the axios instance
export const createFlashcard = async (data) => {
  const res = await API.post("/create", data); // No need for `${API_URL}`
  return res.data;
};

export const getFlashcards = async () => {
  const res = await API.get("/flashcards");
  return res.data;
};
//getDue
export const getDueFlashcards = async () => {
  const today = dayjs().format("YYYY-MM-DD");
  const res = await API.get(`/flashcards?due=${today}`);
  console.log(res);
  return res.data;
};

export const updateFlashcardLevel = async (id, correct) => {
  const res = await API.put(`/flashcards/${id}`, { correct });
  console.log(res);
  return res.data;
};

export const deleteFlashcard = async (id) => {
  await API.delete(`/flashcards/${id}`);
};
