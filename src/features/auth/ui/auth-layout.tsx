import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/kit/card";
import type React from "react";

export function AuthLayout({form, title, description, footerText}: {
    form: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    footerText: React.ReactNode;
}) {
    return (
        <main className="grow flex flex-col items-center justify-center">
            <Card className="w-full max-w-[400px]">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {form}
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-muted-foreground [&_a]:underline [&_a]:text-primary [&_a]:hover:text-pink-300">
                        {footerText}
                    </p>
                </CardFooter>
            </Card>
        </main>
    );
}