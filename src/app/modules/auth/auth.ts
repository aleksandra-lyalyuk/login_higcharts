export interface User {
  id: string | null;
  username: string | null;
  email: string | null;
}

export var UserModel: User = {
  id: null,
  username: 'Admin',
  email: 'Pa$$word',
};
