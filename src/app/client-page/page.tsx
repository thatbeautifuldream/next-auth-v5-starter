"use client";
import { useSession } from "next-auth/react";
import React from "react";

function Page() {
  const { data: session } = useSession();
  if (!session || !session.user)
    return (
      <div className="text-red-500 font-semibold text-lg">
        You must be logged in to view this page.
      </div>
    );
  return <div>This is a clients page and must be protected.</div>;
}

export default Page;
