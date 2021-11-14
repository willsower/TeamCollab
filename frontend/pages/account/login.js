import Head from "next/head";
import Link from "next/link";

import Nav from "../../components/nav";
import Footer from "../../components/footer";

import styles from "../../styles/SignUpLogin.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section className="py-12 px-8 text-center bg-secondary">
          <h1 className="font-bold text-3xl">Log In</h1>
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
              Log In
            </button>
          </form>

          <div className="mt-3">
            <div className="text-link-blue">
              <Link href="/account/login">Forgot password?</Link>
            </div>
            <div className = "mt-3">
              <span className = "text-gray">No Account? </span>
              <span className="text-link-blue">
                <Link href="/account/signup">Create one</Link>
              </span>
            </div>
            {/* <div className="text-xxs w-80 m-auto text-gray mt-4">

            </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
