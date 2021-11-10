import Link from "next/link";

// CSS
import styles from "../styles/Nav.module.css";

function Nav() {
  return (
    <nav className="w-full h-14">
      {/* Logo */}
      <div className = "md:mt-4 md:ml-4 float-left">
          <div className = "bg-primary h-7 w-7 rounded-md text-white text-center pt-0.5">TC</div>
      </div>

      <div className="md:flex md:mt-4 md:absolute md:right-0">
        {/* Regular Links */}
        <div className = {styles.nav_link}>
          <Link href="/">Home</Link>
        </div>
        <div className = {styles.nav_link}>
          <Link href="/">Features</Link>
        </div>
        <div className = {styles.nav_link}>
          <Link href="/">About</Link>
        </div>

        {/* Button Links */}
        <div className = "button-open mr-4">
          <Link href="/">Login</Link>
        </div>
        <div className = "button-fill mr-4">
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
