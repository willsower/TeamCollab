import Link from "next/link";

// CSS
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className="w-full h-14 bg-secondary">
      {/* Logo */}
      <a href = "/" className="mt-4 ml-4 float-left md:ml-8 flex">
        <div className="bg-primary h-7 w-7 rounded-md text-white text-center pt-0.5 font-bold">
          T
        </div>
        <p className = "ml-2 mt-0.5">Team Collab</p>
      </a>

      <div className="hidden sm:block sm:flex sm:mt-4 sm:absolute sm:right-0">
        {/* Regular Links */}
        <div className={styles.nav_link}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.nav_link}>
          <Link href="/">Features</Link>
        </div>
        <div className={styles.nav_link}>
          <Link href="/">About</Link>
        </div>

        {/* Button Links */}
        <div className="button-open mr-4 py-1 px-4">
          <Link href="/account/login">Login</Link>
        </div>
        <div className="button-fill mr-4 py-1 px-4">
          <Link href="/account/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
