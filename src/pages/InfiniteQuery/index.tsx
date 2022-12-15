import { Fragment } from "react";
import { useInfinite } from "../../hooks";

function InfiniteQuery() {
  const { data, fetchNextPage, hasNextPage } = useInfinite();

  return (
    <>
      <p>Infinite Queries</p>

      {data?.pages.map((data, index) => {
        return (
          <Fragment key={index}>
            {data.data?.map((color, index: number) => (
              <div key={`${color?.id} ${index}`}>
                <p>{color?.name}</p>
              </div>
            ))}
          </Fragment>
        );
      })}

      <div>
        {/*     //!fix this typescript error  //  */}
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load More
        </button>
      </div>
    </>
  );
}

export default InfiniteQuery;
