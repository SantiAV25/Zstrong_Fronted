import { RoleRequest } from "./RoleRequest";

export interface CreateUser {
    username: string;
    password: string;
    email: string;
    roleRequest: RoleRequest; 
}

export interface LoginUser {
    username: string;
    password: string;
}

export interface LoginResponse {
    username: string;
  message: string;
  jwt: string;
  status: boolean;
}