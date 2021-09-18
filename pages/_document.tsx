import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html className="black">
        <Head>
          <link
            rel="preload"
            href="https://rsms.me/inter/inter.css"
            as="font"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kristi&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="dark:bg-black dark:text-yellow-400 text-gray-900 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
