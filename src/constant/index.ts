export const BASE_SERVER_URL = "http://localhost:3000";

type NavLink = {
  id: string;
  name: string;
  path: string;
};

export const NAV_LINKS: NavLink[] = [
  { id: "profile", name: "Profile", path: "/profile" },
  { id: "comments", name: "Comments", path: "/comments" },
  { id: "posts", name: "Posts", path: "/posts" },
  { id: "traditional", name: "Traditional Fetch", path: "/traditional" },
  { id: "dependent", name: "Dependent Fetch", path: "/dependent" },
  { id: "pagination", name: "Pagination", path: "/pagination" },
  { id: "infinite", name: "Infinite Query", path: "/infinite" },
];
