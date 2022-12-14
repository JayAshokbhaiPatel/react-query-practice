import { useSingleuser, useUsers } from "../../hooks/useUsers";
import {
  useSingleUserSkills,
  useFetchAllUsersSkills,
} from "../../hooks/useSkills";
import { Fragment } from "react";

type Props = {
  emailId: string;
};

function DependentQuery({ emailId }: Props) {
  // this is the example of  dependent queries
  const { data: user } = useSingleuser(emailId);
  const userEmail = user?.id;
  const { data: userSkills } = useSingleUserSkills(userEmail as string);
  const { data: allUsers } = useUsers();
  const users = allUsers ?? [];
  const allUsersSkills = useFetchAllUsersSkills(users);

  return (
    <>
      <p>Dependent Queries</p>

      <div>
        <p>User data</p>
        <p>User name : {user?.name}</p>
        <p>User Id : {user?.id} </p>
      </div>

      <div>
        <p>Users Skills</p>
        <ul role="list" aria-label="skills-list">
          {userSkills?.techSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {allUsers?.map((user) => (
            <Fragment key={user.name}>
              <li>ID : {user.id}</li>
              <li>Name : {user.name}</li>

              <li>
                Users Skills :
                <ul>
                  {allUsersSkills?.map((data) => {
                    return data?.data?.techSkills?.map((skill, index) => (
                      <li key={`${skill} ${index}`}>{skill}</li>
                    ));
                  })}
                </ul>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DependentQuery;
