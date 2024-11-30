import { useEffect, useState } from "react";
import { useFetchProject } from "../hooks/useFetchProjects";
import { Item } from "./Item";
import { LIMIT } from "../utils/constants";
import { useInfinteScroller } from "../hooks/useInfiniteScroller";

export function List() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { error, loading, fetchData } = useFetchProject();
  const handleIntersection = () => {
    setPage((p) => p + 1);
  };
  const { pivotRef } = useInfinteScroller({ loading, handleIntersection });
  useEffect(() => {
    (async () => {
      const data = await fetchData({ limit: LIMIT, page });

      setList((list) => [...list, ...data]);
      if (data.length < LIMIT) {
        setHasMore(false);
      }
    })();
  }, [page]);

  return (
    <tbody>
      {error && <tr className="error">{error}</tr>}
      {list.map((data) => (
        <Item key={data.sNo} {...data} />
      ))}
      {loading && <tr className="loading">Loading.....</tr>}
      {hasMore && !loading && <tr id="pivot" ref={pivotRef}></tr>}
    </tbody>
  );
}
