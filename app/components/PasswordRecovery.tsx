"use client";

import React, {useState} from 'react';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import axios from "axios";

const PasswordRecovery = () => {
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://webchatmirea.onrender.com/passrcv",
                formData,
                {
                    withCredentials: true,
                }
            );
            console.log("Registration successful:", response.data);
        } catch (error) {
            console.error("There was a problem with the registration:", error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild className="font-semibold text-blue-600 hover:text-blue-500 no-underline dark:bg-dark-1">
                <Button variant="ghost" className="border-none hover:dark:bg-dark-1 hover:bg-white ">Forgot Password?</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] dark:bg-dark-1 dark:text-white shadow-[0_2px_12px_0px_rgba(25, 37, 61, 0.11)] border-none">
                <DialogHeader>
                    <DialogTitle>Change Password</DialogTitle>
                </DialogHeader>
                <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email"
                                       className="block text-sm/6 col-span-3 font-medium text-gray-900 dark:text-white">
                                    Email address
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
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
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="text-white">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
);
};

export default PasswordRecovery;