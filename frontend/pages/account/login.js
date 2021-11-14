import Head from "next/head";
import Link from "next/link";

import Nav from "../../components/nav";
import Footer from "../../components/footer";

import styles from "../../styles/SignUpLogin.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section className="py-12 px-8 text-center bg-secondary">
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
            <button
              type="submit"
              className={`button-fill mt-4 ${styles.form_button}`}
            >
              Create Account
            </button>
          </form>

          <div className="mt-3">
            <div>
              <span className="text-gray">Already have an account? </span>
              <span className="text-link-blue">
                <Link href="/account/login">Log in</Link>
              </span>
            </div>
            <div className="text-xxs w-80 m-auto text-gray mt-4">
              <span>
                By clicking "Create Account", I agreee to TeamCollab's{" "}
              </span>
              <span className="text-link-blue">
                <Link href="/">Terms of Service</Link>
              </span>
              <span> and </span>
              <span className="text-link-blue">
                <Link href="/">Privacy Policy</Link>.
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
