import { Button } from "@/shared/ui/kit/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../model/use-login";

const loginSchema = z.object({
    email: z.string({error: 'Email обязателен'}).email("Неверный email"),
    password: z.string({error: 'Password обязателен'}).min(6, "Пароль должен быть не менее 6 символов"),
});

export function LoginForm() {
    const { errorMessage, isPending, login } = useLogin();
    const form = useForm({
        resolver: zodResolver(loginSchema)
    })
    const onSubmit = form.handleSubmit((data) => {
        login(data)
    })
    return (
        <Form {...form}>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" {...field} type="password"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {errorMessage && <p className="text-destructive text-sm">{errorMessage}</p>}
                <Button disabled={isPending} type="submit">Войти</Button>
            </form>
        </Form>
    );
};

