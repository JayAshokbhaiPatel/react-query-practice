import { AddColors } from "../../components/forms";
import { usePagination } from "../../hooks";
import { useColors } from "../../hooks/useColors";

function Pagination() {
  const { page, nextPage, previousPage } = usePagination();
  const { data, isError, error, isPreviousData } = useColors(page as number);

  if (isError) {
    return <p>{error?.message}</p>;
  }

  const handleGoToPreviousPage = () => {
    previousPage();
  };
  const handleGoToNextPage = () => {
    if (!isPreviousData) {
      nextPage();
    }
  };

  return (
    <>
      <p>Pagination Query</p>
      <AddColors />

      {data?.map((color) => (
        <p key={color.name}>
          {color.id} . {color.name}
        </p>
      ))}

      <p>Current Page : {page} </p>
      <button onClick={handleGoToPreviousPage} disabled={page === 1}>
        {" "}
        Previous Page{" "}
      </button>

      <button onClick={handleGoToNextPage}>Next Page</button>
    </>
  );
}

export default Pagination;
