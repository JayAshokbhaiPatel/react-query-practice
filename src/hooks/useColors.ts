import { useQuery, useMutation, useQueryClient } from "react-query";

import { addColors, fetchPaginatedColors } from "../api";

function useColors(currentPage: number) {
  return useQuery(
    ["colors", currentPage],
    () => fetchPaginatedColors(currentPage),
    { keepPreviousData: true }
  );
}

function useAddColors() {
  const queryClient = useQueryClient();
  // direct add function
  return useMutation({
    mutationFn: addColors,
    onSuccess: (data) => {
      // this is used for refetch new latest data when you add something via the form
      // queryClient.invalidateQueries("colors");

      // immediate update add color to save one network request
      queryClient.setQueryData("colors", (oldData) => {
        return {
          // !fix this typescript error
          ...oldData,
          data: [...oldData?.data, data?.data],
        };
      });
    },
  });
}

export { useColors, useAddColors };
