'use client'
import { useEffect, useState } from "react";
import { useUser } from "@/hooks";

const Dashboard = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const { user, isLoading } = useUser();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const { username, email, avatar } = user.data;

    return (
        <div className='w-full lg:ps-64'>
            <div className='page-content space-y-6 p-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Hello {username}</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
