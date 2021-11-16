import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

import Nav from "../../components/nav";
import Footer from "../../components/footer";

import styles from "../../styles/SignUpLogin.module.css";

export default function Login() {
  // Handle State
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  // Handle on Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  // Check if User in DB
  function login() {
    axios.post("http://localhost:3001/users/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
    });
  }

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
          {/* Google Sign In */}
          <button className={`${styles.form_item}`}>
            <div className="inline-block w-6 h-6 relative align-middle">
              <Image src="/icon/google.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="ml-2 inline-block align-middle font-semibold">
              Login with Google
            </p>
          </button>

          <p className="mt-4 text-gray font-light">or</p>

          <form action="#" method="POST">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className={styles.form_item}
              value={user.email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={styles.form_item}
              value={user.password}
              onChange={handleChange}
              required
            />
            <br />
            <button
              type="submit"
              className={`button-fill mt-4 ${styles.form_button}`}
              onClick={login}
            >
              Log In
            </button>
          </form>

          <div className="mt-3">
            <div className="text-link-blue">
              <Link href="/account/login">Forgot password?</Link>
            </div>
            <div className="mt-3">
              <span className="text-gray">No Account? </span>
              <span className="text-link-blue">
                <Link href="/account/signup">Create one</Link>
              </span>
            </div>
            <div className="text-xxs w-80 m-auto text-gray mt-2">
              <div className="mb-1">
                This site is protected by reCAPTCHA and the Google{" "}
                <span className="text-link-blue">
                  <Link href="https://policies.google.com/privacy">
                    Privacy Policy
                  </Link>{" "}
                </span>
                and{" "}
                <span className="text-link-blue">
                  <Link href="https://policies.google.com/terms">
                    Terms of Service
                  </Link>
                </span>{" "}
                apply.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
