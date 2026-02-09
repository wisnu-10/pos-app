import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/useAuthStore";
import { useFormik } from "formik";
import { loginApi } from "../api/login.api";

export function useFromLogin() {
    const { setAuth } = useAuthStore();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async ({ email, password }) => {
            const user = await loginApi({ email, password });

            setAuth({ username: user?.username, role: user?.role });

            router.push("/dashboard");
        },
    });
    return { formik };
}