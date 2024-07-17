import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { getUserAuthData };
export { userActions, userReducer } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
