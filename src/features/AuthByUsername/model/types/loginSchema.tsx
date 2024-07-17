export interface LoginSchema {
    username: string;
    password: string;
    email?: string;
    error?: string
    isLoading?: boolean
}
