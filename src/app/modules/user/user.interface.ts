export type TUser = {
  id: string;
  password: string;
  needPasswordChange: boolean;
  role: "admin" | "faculty" | "student";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};

export type NewUser = {
  id: string;
  role: string;
  password: string;
};
