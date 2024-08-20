"use client";
import { useEffect } from "react";
import { LayoutProvider } from "@/context";


const AppProvidersWrapper = ({ children }) => {
    const handleChangeTitle = () => {
        if (document.visibilityState == "hidden")
            document.title = "Mình nhớ bạn 🥺";
        else
            document.title = "CLB Ánh Sáng";
    };

    useEffect(() => {
        import("preline");

        document.addEventListener("visibilitychange", handleChangeTitle);
        return () => {
            document.removeEventListener("visibilitychange", handleChangeTitle);
        };
    }, []);

    return (
        <LayoutProvider>
            {children}
        </LayoutProvider>
    );
};
export default AppProvidersWrapper;
