import axios from "axios";

const apiKey = import.meta.env.NEWS_API_KEY;

const api = axios.create({ baseURL: "https://newsapi.org/v2" });

export const getCryptoNews = async () => {
  const res = await api.get("/everything", {
    params: {
      q: "cryptocurrency",
      sortBy: "publishedAt",
      apiKey,
    },
  });

  return res.data.articles;
};
