"use client";

import { IUserData } from "../interfaces/IUserData";
import { createContext, useContext, ReactNode, useEffect, useState } from "react";

const UserDataContext = createContext<IUserData | null>(null); // create new context for user data following the interface

export function UserDataProvider({ children }: { children: ReactNode }) {
    const [userData, setUserData] = useState<IUserData | null>(null);

    useEffect(() => {
        const fetcher = async () => {
            try {
                const res = await fetch("/api/userData", { method: "GET" });
                const data = await res.json();

                if (!res.ok || !data.userData) throw new Error(data.message);

                setUserData(data.userData);
            } catch (error) {
                console.error(error);
            }
        }

        fetcher();
    }, []);

    return (
        <UserDataContext.Provider value={userData}>
            {children}
        </UserDataContext.Provider>
    );
}

// Custom hook to use the UserDataContext
export function useUserDataContext(): IUserData | null {
    return useContext(UserDataContext);
}
