"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import CustomNavBar from "@/components/custom/CustomNavBar";
import withAuth from '@/utils/withAuth';
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  const { logout } = useAuth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl">Profile</h1>
        <div className="flex items-center justify-center h-[35rem] w-full">
        <Button 
          onClick={logout} 
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Logout
          </Button>
          <CustomNavBar />
        </div>
      </main>
    </div>
  );
}

export default withAuth(ProfilePage);