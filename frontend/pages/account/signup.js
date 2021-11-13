import Head from "next/head";

import Nav from "../../components/nav";
import Footer from "../../components/footer";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section className = "">
          <h1>Sign Up</h1>
          <form onSubmit = "">
            <label>Email</label>
            <input name = "email" type = "text"/>
            <label>Password</label>
            <input name = "password" type = "password"/>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
