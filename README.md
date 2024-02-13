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

> NOTE : Auth alias has been added in the `tsconfig.json` file to make the import of the auth.ts file easier. By adding `"auth": ["./auth.ts"]` in the `paths` object of the `tsconfig.json` file.

## Client Protected Routes

- To leverage client side authentication and protect routes, the `useSession` hook from `next-auth/react` is used in the client [page.tsx](src/app/client-page/page.tsx).
- Extract `data` as `session` from the `useSession` hook and use it to protect routes.
- session contains the user information and the token.
- The `useSession` hook is used to protect the client side routes and it essentially consumes the SessionProvider context.
- The `SessionProvider` is used to provide the session to the client side routes, it is initialised as a HOC in the [providers.tsx](src/app/providers.tsx) file.
- Since the SessionProvider is a context provider, it essestially has to be a client component, and hence the "use client" directive at the top of the file.
- This does not mean all the components passed inside it becomes client side, it just means that the context is available to the client side components, server side components can still be passed inside it.

## Server Protected Routes

- To protect server side routes, you can simply get session from the auth() function and use it to protect the routes.
- Simmilar to client the session object contains the user information and the token.
- Have a look at server protected page for example [page.tsx](src/app/server-page/page.tsx).

## AppBar Implementation

- The AppBar is implemented in the [appbar.tsx](src/app/appbar.tsx) file.
- The AppBar is a server component and hence the "use server" directive at the top of the file.
- The buttons cannot have an `onClick` event, as the server components are rendered on the server and the `onClick` event is a client side event.
- Instead the buttons are implmented as a part of form submission, and the form submission is handled by the form action that runs on the server.

```jsx
<form
action={async () => {
    "use server";
    await signIn();
}}>
```

- The `signIn` function is imported from the `auth()` that we have defined in the [auth.ts](auth.ts) file.
- The `auth()` function is used to authenticate the user and it is used in the server side components to protect the routes.

## Typed Routes (Experimental)

- I have added a typed routes in the project you can now see Link hrefs are typed.
- To use typed routes you can change the `next.config.js` file as follows:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
```

## References

- [Auth.js Upgrade Guide](https://authjs.dev/guides/upgrade-to-v5)
- [Auth.js V5 From Scratch](https://www.youtube.com/watch?v=Rs8018RO5YQ)
