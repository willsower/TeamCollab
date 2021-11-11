import Link from "next/link";

// CSS
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className="w-full h-14">
      {/* Logo */}
      <div className="mt-4 ml-4 float-left">
        <div className="bg-primary h-7 w-7 rounded-md text-white text-center pt-0.5 font-bold">
          T
        </div>
      </div>

      <div className="hidden md:block md:flex md:mt-4 md:absolute md:right-0">
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
          <Link href="/">Login</Link>
        </div>
        <div className="button-fill mr-4 py-1 px-4">
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
