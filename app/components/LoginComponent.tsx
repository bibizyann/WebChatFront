"use client";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import PasswordRecovery from "@/app/components/PasswordRecovery";
import {FormState, LoginFormSchema} from "@/lib/definitions";
import {useFormState, useFormStatus} from "react-dom";
import {Button} from "@/components/ui/button";
const LoginComponent: React.FC = () => {

  const handleSubmit = async (state: FormState, formData: FormData) => {
    const validatedFields = LoginFormSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const errorMessage = { message: 'Invalid login credentials.' };

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const {email, password } = validatedFields.data;

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
          {email, password},
        {
          withCredentials: true,
        }
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("There was a problem with the registration:", error);
    }
  };

  const [state, action] = useFormState(handleSubmit, undefined);

  return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Your Company"
                src="/icons/logo.png"
                className="mx-auto h-20 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action={action} method="POST" className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                    Email address
                  </label>
                </div>
                <div className="mt-2">
                  <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md dark:bg-[#545464] px-3 py-1.5 text-base
                      text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-[#767676e6]
                      placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                      focus:outline-blue-600 sm:text-sm/6"
                      placeholder="example@mail.ru"
                  />
                </div>
              </div>
              {state?.errors?.email && <p>{state.errors.email}</p>}

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <div className="text-sm">
                    <PasswordRecovery/>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md dark:bg-[#545464] px-3 py-1.5 text-base
                      text-gray-900 dark:text-white outline outline-1 -outline-offset-1 outline-gray-300 dark:outline-[#767676e6]
                      placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2
                      focus:outline-blue-600 sm:text-sm/6"
                  />
                </div>
              </div>
              {state?.errors?.password && (
                  <div>
                    <p>Password must:</p>
                    <ul>
                      {state.errors.password.map((error) => (
                          <li key={error}>- {error}</li>
                      ))}
                    </ul>
                  </div>
              )}

              <div>
                <SignInButton />
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?{' '}
              <a href="/registration" className="font-semibold text-blue-600 hover:text-blue-500 no-underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </>
  );
};

export function SignInButton() {
  const { pending } = useFormStatus();

  return (
      <Button aria-disabled={pending} type="submit" className="mt-2 w-full">
        {pending ? 'Submitting...' : 'Login'}
      </Button>
  );
}

export default LoginComponent;