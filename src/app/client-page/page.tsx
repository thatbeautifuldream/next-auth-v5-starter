"use client";
import { useSession } from "next-auth/react";
import React from "react";

function Page() {
  const { data: session } = useSession();
  if (!session || !session.user)
    return (
      <div className="text-red-500 font-semibold p-5">
        You must be logged in to view this page.
      </div>
    );
  return (
    <div className="text-orange-300 font-semibold p-5">
      This is a protected client page.
    </div>
  );
}

export default Page;
