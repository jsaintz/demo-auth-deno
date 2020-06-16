export interface User {
  id: string;
  username: string;
  password: string;
}

const users: Array<User> = [
  {
    id: "01",
    username: "Jonatas",
    password: "Jonatas",
  },
  {
    id: "02",
    username: "Telles",
    password: "Telles",
  },
];

export default users;
