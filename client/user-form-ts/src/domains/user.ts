
export interface User {
  id: string;
  name: string;
  username: string;
};

export interface UserContextState {
  data: User[];
};