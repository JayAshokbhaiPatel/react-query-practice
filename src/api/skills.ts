import axios from "axios";
import { BASE_SERVER_URL } from "../constant";

import { SkillsAPIResponse } from "../types/api-response.types";

// get all the skills list with userID
export const fetchSkills = async () => {
  try {
    const res = await axios.get<SkillsAPIResponse[]>(
      `${BASE_SERVER_URL}/skills`
    );

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};

// fetch particular user's skills
export const fetchUsersSkills = async (emailID: string) => {
  try {
    const res = await axios.get<SkillsAPIResponse>(
      `${BASE_SERVER_URL}/skills/${emailID}`
    );

    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    throw err;
  }
};
