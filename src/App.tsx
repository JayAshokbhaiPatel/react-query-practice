import { RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import "./sass/main.scss";

import { router } from "./routes";

import { Loader } from "./components";

// create client
const queryClient = new QueryClient();

function App() {
  return (
    // provide query client to whole app
    <QueryClientProvider client={queryClient}>
      {/* Global Loader Component */}
      <RouterProvider router={router} />
      <Loader />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
