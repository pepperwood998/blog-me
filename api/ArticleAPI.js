import axios from "axios";

const uri = "http://localhost:4000/api/articles";

export const fetchListArticle = async (offset = 0, limit = 20) => {
  const params = new URLSearchParams({ offset, limit });
  const url = new URL(`${uri}`);
  url.search = params;

  return axios.get(url);
};
