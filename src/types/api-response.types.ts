export type ResponseData = {
  id: number;
  body: string;
  postId: number;
};

export type PostResponse = {
  id: number;
  title: string;
  author: string;
};

export type UsersAPIResponse = {
  id: string;
  name: string;
};

export type SkillsAPIResponse = {
  id: string;
  techSkills: string[];
};

export type ColorAPIResponse = {
  id: number;
  name: string;
};

export type AddColorRequestBody = {
  name: string;
};
