import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

import Nav from "../../components/nav";
import Footer from "../../components/footer";
import validateSignIn from "../../utils/clientValidate";

import styles from "../../styles/SignUpLogin.module.css";

export default function SignUp() {
  // State
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [serverErr, setServerErr] = useState("Test");

  // Handle on Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  // Send user to database
  function register(e) {
    const { email, password } = user;
    const validate = validateSignIn(email, password);
    setEmailErr(validate.errors.email);
    setPassErr(validate.errors.password);

    if (email && password && validate.formIsValid) {
      axios.post("http://localhost:3001/users/signup", user).then((res) => {
        setServerErr(res.data);
      });
    } else {
      e.preventDefault();
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <section className="py-12 px-8 text-center bg-secondary">
          <h1 className="font-bold text-3xl">Sign Up</h1>
          {serverErr != "" && <p className="text-red-500 mt-4">{serverErr}</p>}

          {/* Google Sign In */}
          <button className={`${styles.form_item}`}>
            <div className="inline-block w-6 h-6 relative align-middle">
              <Image src="/icon/google.svg" layout="fill" objectFit="contain" />
            </div>
            <p className="ml-2 inline-block align-middle font-semibold">
              Sign in with Google
            </p>
          </button>

          <p className="mt-4 text-gray font-light">or</p>

          <form action="#" method="POST">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className={`${styles.form_item}`}
              value={user.email}
              onChange={handleChange}
              required
              id="email"
            />
            {emailErr != "" ? (
              <p className="text-red-500">{emailErr}</p>
            ) : (
              <br />
            )}

            <input
              name="password"
              type="password"
              placeholder="Password"
              className={`${styles.form_item}`}
              value={user.password}
              onChange={handleChange}
              required
              id="pass"
            />
            {passErr != "" ? (
              <p
                className="text-red-500"
                dangerouslySetInnerHTML={{ __html: passErr }}
              ></p>
            ) : (
              <br />
            )}
            <button
              type="submit"
              className={`button-fill mt-4 ${styles.form_button}`}
              onClick={register}
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
