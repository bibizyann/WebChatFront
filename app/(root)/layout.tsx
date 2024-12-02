'use client';

import React, {ReactNode, useEffect} from 'react'

const RootLayout = ({children}: {children: ReactNode}) => {
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (systemPrefersDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemThemeChange = () => {
            if (!savedTheme || savedTheme === "system") {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        };

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        };
    }, []);

    return(
        <main>
            {children}
        </main>
    )
}

export default RootLayout