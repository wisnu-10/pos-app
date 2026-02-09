import { ApiResponse } from "@/types/api";
import axiosInstance from "@/utils/axiosInstance";
import { User } from "../types";

export async function loginApi({
    email,
    password,
}: Pick<User, "email" | "password">) {
    try {
        const response = await axiosInstance.post<ApiResponse<any>>(
            "/auth/login",
            {
                email,
                password,
            },
        );

        return response?.data?.data;
    } catch (error) {
        console.log(error);
    }
}