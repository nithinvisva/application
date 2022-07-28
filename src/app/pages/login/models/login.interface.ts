export interface LogIn{
    email: string;
    password: string;
}
export interface LogInResponse{
    userId: string;
    email: string;
    token : string;
}
