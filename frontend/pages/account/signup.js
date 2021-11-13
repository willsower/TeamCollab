import Head from "next/head";

import Nav from "../../components/nav";
import Footer from "../../components/footer";

import styles from "../../styles/SignUp.module.css";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section className = "py-12 px-8 text-center">
          <h1 className = "font-bold text-3xl">Sign Up</h1>
          <form onSubmit = "">
            <input name = "email" type = "text" placeholder = "Email" className = {styles.form_item}/><br/>
            <input name = "password" type = "password" placeholder = "Password" className = {styles.form_item}/>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
