import Head from "next/head";

import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
            Signed in
      </main>

      <Footer />
    </>
  );
}
