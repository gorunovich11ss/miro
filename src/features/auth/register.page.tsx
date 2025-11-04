import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/auth-layout";
import { ROUTES } from "@/shared/model/routes";
import { RegisterForm } from "./ui/register-form";

function RegisterPage() {
    return (
        <AuthLayout title="Регестрация" description="Введите ваш email и пароль для регестрации" footerText={<>
            Есть аккаунта?
            {" "}
            <Link className="underline text-primary hover:text-pink-300" to={ROUTES.LOGIN}>Войти</Link>
        </>} form={
            <RegisterForm />
        } />
    );
}

export const Component = RegisterPage;