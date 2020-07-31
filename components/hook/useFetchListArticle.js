import { useState, useEffect } from "react";
import { fetchListArticle } from "../../api/ArticleAPI";

export default function useFetchListArticle(offset = 0, limit = 20) {
  const [data, setData] = useState({
    articles: [],
    articlesCount: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const response = await fetchListArticle(offset, limit);
        setData({ ...response.data });
      } catch (err) {
        setError("Failed to get articles");
      } finally {
        setLoading(false);
      }
    })();
  }, [offset, limit]);

  return [data, loading, error];
}
