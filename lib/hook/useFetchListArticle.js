import { useState, useEffect } from "react";
import { fetchListArticle } from "../api/article";

export default function useFetchListArticle(offset = 0, limit = 20) {
  const [data, setData] = useState({
    articles: [],
    articlesCount: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isReady = true;

    setLoading(true);

    (async () => {
      try {
        const response = await fetchListArticle(offset, limit);
        if (isReady) {
          setData({ ...response.data });
        }
      } catch (err) {
        setError("Failed to get articles");
      } finally {
        setLoading(false);
      }

      return () => {
        isReady = false;
      };
    })();
  }, [offset, limit]);

  return [data, loading, error];
}
