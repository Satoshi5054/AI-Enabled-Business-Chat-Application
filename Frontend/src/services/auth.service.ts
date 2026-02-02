import api from "./api";
import type { AxiosResponse } from "axios";

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export interface SignUpPayload {
  email: string;
  name: string;
  password: string;
}

export const signIn = async (payload: SignInPayload): Promise<SignInResponse> => {
  const token = localStorage.getItem("token");
  const res: AxiosResponse<SignInResponse> = await api.post(
    "/auth/login",
    payload,
    {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    }
  )
  return res.data
};

export const signUp = async (payload: SignUpPayload) => {
  const res = await api.post("/auth/register",payload)
  return res.data
}