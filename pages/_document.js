import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // react portals
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
        <div id="notifications"></div>
      </body>
    </Html>
  );
}
