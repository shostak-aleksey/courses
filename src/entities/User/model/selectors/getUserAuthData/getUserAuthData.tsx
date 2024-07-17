import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;

// export const getUserAuthDataIsLoading = (state: StateSchema) => state.user.isLoading;
