"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/");
    }
  }, []);
  return <p className="text-center py-10 text-2xl font-bold">Dashboard</p>;
};

export default Page;
