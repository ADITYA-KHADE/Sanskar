"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

// Schema validation using Zod
const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: SignupFormValues) => {
    setErrorMessage(null); // Clear previous errors

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      router.push("/dashboard"); // Redirect on success
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-yellow-400">
      <Card className="w-full max-w-md shadow-lg bg-yellow-300">
        <CardHeader>
          <CardTitle className="text-center">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Field */}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} placeholder="John Doe" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} placeholder="********" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Error Message */}
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : "Sign Up"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
