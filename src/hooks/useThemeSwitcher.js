import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("dark"); // Default to "dark"

    useEffect(() => {
        // Check for window and localStorage only in the browser
        if (typeof window !== 'undefined') {
            const userPref = window.localStorage.getItem("theme");
            const mediaQuery = window.matchMedia(preferDarkQuery);

            // Set the initial mode based on user preference or system preference
            const initialMode = userPref || (mediaQuery.matches ? "dark" : "light");
            setMode(initialMode);

            // Apply the initial mode to the document
            if (initialMode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }

            const handleChange = () => {
                if (!userPref) {
                    const newMode = mediaQuery.matches ? "dark" : "light";
                    setMode(newMode);
                }
            };

            mediaQuery.addEventListener("change", handleChange);

            return () => mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (mode === "dark") {
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
            } else {
                window.localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
            }
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;
