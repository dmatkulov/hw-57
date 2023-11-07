export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: boolean;
}

export interface UserMutation {
  name: string;
  email: string;
  role: string;
}