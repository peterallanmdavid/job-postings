This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Installation

```
yarn install --frozen-lockfile
```

## running

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

NOTE: Make sure port 3000 is open and not being used by another application, or else next js will start the application on a different port (it will be listed on the console log what port it will use).

NOTE: If this error occurs,

`Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used`,

check if you have some browser extension that might be changing or affecting rendering of html, like chrome extensions for doing night mode, this messes up with next js hydration of html.

Although this error occurs, the app will still work, its a mere warning that internal hydration of next js will be affected and might affect optimization of rendering the app.
