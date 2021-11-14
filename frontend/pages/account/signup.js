import Head from "next/head";
import Link from "next/link";

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
        <section className="py-12 px-8 text-center">
          <h1 className="font-bold text-3xl">Sign Up</h1>
          <form onSubmit="">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className={styles.form_item}
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.form_item}
            />
            <br />
            <button type = "submit" className={`button-fill mt-4 ${styles.form_button}`}>
              Create Account
            </button>
          </form>

          <div>
            <div><span>Already have an account? </span><Link href = "/">Log in</Link></div>
            <div className = "text-xxs w-80 m-auto text-gray">
              <span>By clicking "Create Account", I agreee to TeamCollab's </span><Link href = "/">Terms of Service</Link><span> and </span><Link href = "/">Privacy Policy.</Link>
            </div>
          </div>
        
        </section>
      </main>

      <Footer />
    </>
  );
}
