import { auth, signIn, signOut } from "auth";
import Link from "next/link";
import React from "react";

async function AppBar() {
  const session = await auth();
  return (
    <div className="p-2 flex gap-2 items-center">
      <Link className="text-white font-semibold text-sm" href="/client-page">
        Client Page
      </Link>
      <div className="ml-auto">
        {session && session.user ? (
          <div className="flex gap-2 items-center">
            <p className="text-white font-semibold text-sm">
              {session.user.name}
            </p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button
              className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
              type="submit"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AppBar;
