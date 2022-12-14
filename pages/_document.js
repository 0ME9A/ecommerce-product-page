import { Html, Head, Main, NextScript } from "next/document";










export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="theme-color" color="rgb(255,125,26)">

            </meta>
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link rel="manifest" href="/manifest.json"></link>
            <meta name="description" content="E-commerce product page (sneakers) is front-end mentor project for beginer developer"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
