import { auth } from "auth";
import React from "react";

async function Page() {
  const session = await auth();
  if (!session || !session.user)
    return (
      <div className="text-red-500 font-semibold p-5">
        You must be logged in to view this page.
      </div>
    );
  return (
    <div className="text-green-300 font-semibold p-5">
      This is a protected server page.
    </div>
  );
}

export default Page;
