import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import HeadFav from "../components/head-fav";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <HeadFav />
          <Link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
