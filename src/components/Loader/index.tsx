import { useIsFetching } from "react-query";

import Main from "./Main";

function Loader() {
  const isFetching = useIsFetching();
  // !This is only for getting data in get request in post request it will not work
  return <>{isFetching ? <Main /> : null}</>;
}

export default Loader;
