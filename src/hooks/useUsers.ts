import { useQuery } from "react-query";
import { fetchSingleUser, fetchUsers } from "../api";

function useSingleuser(emailId: string) {
  return useQuery(["singleUser", emailId], () => fetchSingleUser(emailId));
}

function useUsers() {
  return useQuery("allUsers", fetchUsers);
}
export { useUsers, useSingleuser };
