import { useState } from "react";
import { delayMockData, transFormProjectList } from "../utils/util";

export function useFetchProject() {
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const fetchData = async ({ page, limit }) => {
    try {
      setIsLoading(true);

      const resp = await delayMockData({
        page,
        limit,
      });
      return transFormProjectList(resp);
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
