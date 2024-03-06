"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div className="flex justify-between py-10 px-10 bg-cyan-300 items-center">
      <h1 className="text-lg font-bold text-black">
        <Link href={"/"}>LOGO</Link>{" "}
      </h1>
      <div className="flex gap-[55px]">
        <Link href={"/about"} className="text-black">
          About
        </Link>
        <Link href={"/contact"} className="text-black">
          Contact
        </Link>
        {session?.user && (
          <Link href={"/dashboard"} className="text-black">
            Dashboard
          </Link>
        )}
      </div>

      <div className="flex gap-10">
        <div className="flex gap-3 items-center">
          {status == "loading" && <p>Loading...</p>}
          {status == "unauthenticated" ? (
            ""
          ) : (
            <img
              width={40}
              height={40}
              src={session?.user?.image}
              alt=""
              className="rounded-lg"
            />
          )}

          <p className="text-lg text-black font-semibold">
            {session?.user?.name}
          </p>
        </div>
        {status == "authenticated" ? (
          <button
            className="btn rounded-lg bg-red-600 text-white px-4 py-2"
            onClick={() => signOut()}
          >
            Sing Out
          </button>
        ) : (
          <button
            className=" rounded-lg bg-black text-white px-4 py-2"
            onClick={() => signIn()}
          >
            Sing In
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
