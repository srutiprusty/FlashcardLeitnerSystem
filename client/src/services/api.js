import axios from "axios";
import dayjs from "dayjs";

const API = axios.create({ baseURL: "http://localhost:5001/api" });

export const createFlashcard = async (data) => {
  const res = await API.post("/create", data);
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
