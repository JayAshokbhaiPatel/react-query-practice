import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops !</h1>
      <p>Sorry, un expected error has occurred</p>
      <pre>{JSON.stringify(error)}</pre>
    </div>
  );
}

export default Error;
