import { useState } from "react";
import { delayMock, transFormProjectList } from "../utils/util";

export function useFetchProject() {
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const fetchData = async ({ page, limit }) => {
    try {
      setIsLoading(true);
      const resp = await fetch(
        `http://localhost:8000/data?_page=${page}&_per_page=${limit}`
      );
      await delayMock();
      const { data } = await resp.json();
      return transFormProjectList(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    fetchData,
    error,
    loading,
  };
}
