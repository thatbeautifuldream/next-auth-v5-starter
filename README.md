# Auth.js v5 (Next Auth v5) Starter with Google and Credentials (username & password) Providers

## Getting Started

- The file [route.ts](src/app/api/auth/[...nextauth]/route.ts) is the main entry point for the NextAuth.js API routes.
- The [auth.ts](auth.ts) file in the root of the app handles the authentication logic.

## Configuration

- The [auth.ts](auth.ts) file contains the configuration for the authentication providers.
- The demo account for this application is `admin` and `root`.
- The google credentials examples are in the [.env.example](.env.example) file. suffixed as `AUTH_<provider_name>_<ID|SECRET>`.
- Also need to pass a Auth secret, which is used to sign the JWT token. This is passed as `AUTH_SECRET` as illustrated in the [.env.example](.env.example) file.
- You can generate a secret using the command `openssl rand -base64 32` and then pass it as the value for `AUTH_SECRET` in the `.env.local` file.
- The middleware for the application is inside the src and in the same level as app directory [middleware.ts](src/middleware.ts).

## Client Protected Routes

- To leverage client side authentication and protect routes, the `useSession` hook from `next-auth/react` is used in the client [page.tsx](src/app/client-page/page.tsx).
- Extract `data` as `session` from the `useSession` hook and use it to protect routes.
- session contains the user information and the token.
- The `useSession` hook is used to protect the client side routes and it essentially consumes the SessionProvider context.
- The `SessionProvider` is used to provide the session to the client side routes, it is initialised as a HOC in the [providers.tsx](src/app/providers.tsx) file.
- Since the SessionProvider is a context provider, it essestially has to be a client component, and hence the "use client" directive at the top of the file.
- This does not mean all the components passed inside it becomes client side, it just means that the context is available to the client side components, server side components can still be passed inside it.
