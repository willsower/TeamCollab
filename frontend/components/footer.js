import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className= "bg-primary p-12 md:flex md:justify-center text-white">
      <div className="w-44 pt-12">
        {/* Logo */}
        <div className="bg-white h-7 w-7 rounded-md text-primary text-center pt-0.5 font-bold">
          T
        </div>
        <p className = "text-xs mt-4 leading-6 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className={styles.footer_right}>
        {/* Resources */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Resources</p>
          <Link href="/">
            <p className={styles.footer_item}>Privacy Policy</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Terms of Service</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Press</p>
          </Link>
          <br />
        </div>

        {/* Company */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Company</p>
          <Link href="/">
            <p className={styles.footer_item}>About</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Team</p>
          </Link>
          <br />
        </div>

        {/* Contact */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Contact</p>
          <Link href="/">
            <p className={styles.footer_item}>Contact Us</p>
          </Link>
          <br />
          <Link href="/">
            <p className={styles.footer_item}>Feedback</p>
          </Link>
          <br />
        </div>

        {/* Social */}
        <div className="md:px-5">
          <p className={styles.footer_header}>Social</p>
          <div className="flex md:block">
            {/* Facebook */}
            <div className={styles.footer_social_item}>
              <a href="/">
                <Image src="/icon/facebook.png" height="17" width="10" />
              </a>
            </div>

            {/* Twitter */}
            <div className={styles.footer_social_item}>
              <a href="/" className = "bg-primary">
                <Image src="/icon/twitter.png" height="17" width="17" />
              </a>
            </div>

            {/* LinkedIn */}
            <div className={styles.footer_social_item}>
              <a href="/">
                <Image src="/icon/linkedin.png" height="17" width="17" />
              </a>
            </div>

            {/* Instagram */}
            <div className={styles.footer_social_item}>
              <a href="/">
                <Image src="/icon/instagram.png" height="17" width="17" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
