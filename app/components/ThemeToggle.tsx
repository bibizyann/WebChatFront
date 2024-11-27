'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import {Computer, Moon, Sun} from "lucide-react";

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState<string>('system');

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "system" || !savedTheme) {
            applySystemTheme();
            setActiveTheme("system");
        } else {
            applyTheme(savedTheme);
            setActiveTheme(savedTheme);
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemThemeChange = () => {
            if (!savedTheme || savedTheme === "system") {
                applySystemTheme();
            }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, []);

    const applyTheme = (theme: string) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark');
        }
    };

    const handleThemeChange = (newTheme: string) => {
        setActiveTheme(newTheme)
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'system') {
            applySystemTheme();
        } else {
            applyTheme(newTheme);
        }
    };

    const applySystemTheme = () => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return (
        <div className="p-[3px] w-fit flex items-center rounded-full border border-sky-300 dark:border-slate-400">
            <button className={`w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-in-out 
            ${activeTheme === 'light' 
                ? 'bg-yellow-200' 
                : 'bg-grey-400'
            }`}
                    onClick={() => handleThemeChange('light')}>
                <Sun size={20}/>
            </button>
            <button className={`w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-in-out 
            ${activeTheme === 'system' 
                ? 'bg-gray-400' 
                : 'bg-grey-400'
            }`}
                    onClick={() => handleThemeChange('system')}>
                <Computer size={20}/>
            </button>
            <button className={`w-8 h-8 flex items-center justify-center rounded-full transition duration-300 ease-in-out 
            ${activeTheme === 'dark' 
                ? 'bg-sky-800' 
                : 'bg-grey-400'
            }`}
                    onClick={() => handleThemeChange('dark')}>
                <Moon size={20}/>
            </button>
        </div>
    );
};

export default ThemeToggle;