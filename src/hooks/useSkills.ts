import { useQueries, useQuery } from "react-query";
import { fetchSkills, fetchUsersSkills } from "../api";

type allUsers = {
  id: string;
  name: string;
};

function useSkills() {
  return useQuery("allUsersSkills", fetchSkills);
}

function useSingleUserSkills(emailID: string) {
  return useQuery(
    ["fetchSkillsSingleUser", emailID],
    () => fetchUsersSkills(emailID),
    {
      enabled: !!emailID,
    }
  );
}

function useFetchAllUsersSkills(allUsers: allUsers[]) {
  return useQueries(
    allUsers?.map((user) => {
      return {
        queryKey: ["fetchSkillsSingleUser", user.id],
        queryFn: () => fetchUsersSkills(user.id),
      };
    })
  );
}

export { useSkills, useSingleUserSkills, useFetchAllUsersSkills };
