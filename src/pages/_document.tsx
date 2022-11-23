import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="books" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=McLaren&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
