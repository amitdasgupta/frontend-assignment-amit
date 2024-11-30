import { useRef } from "react";

export function useInfinteScroller({ loading, handleIntersection }) {
  const observer = useRef(null);
  const pivotRef = (node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((enteries) => {
      if (enteries[0].isIntersecting) {
        handleIntersection();
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  };

  return {
    pivotRef,
  };
}
