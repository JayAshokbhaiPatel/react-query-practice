import { useState } from "react";

function usePagination() {
  const [page, setPage] = useState(1 as number);

  const nextPage = () => {
    setPage((oldPage) => oldPage + 1);
  };

  const previousPage = () => {
    setPage((oldPage) => oldPage - 1);
  };

  return { page, nextPage, previousPage };
}

export default usePagination;
