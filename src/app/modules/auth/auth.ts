export interface User {
  id: string | null;
  username: string | null;
  pass: string | null;
}

export var UserModel: User = {
  id: null,
  username: null,
  pass: null,
};

export const user = {
  username: 'Admin',
  pass: 'Pa$$word'
}
