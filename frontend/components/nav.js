import Link from "next/link";

function Nav() {
  return (
    <nav className = "w-full h-24 bg-red-200 md:flex md:absolute">
        {/* Logo */}
      <div>Logo</div>

      <div className = "md:flex md:relative md:right-0">
        {/* Regular Links */}
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/">Features</Link>
        </div>
        <div>
          <Link href="/">About</Link>
        </div>

        {/* Button Links */}
        <div>
          <Link href="/">Login</Link>
        </div>
        <div>
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
