import Head from "next/head";
import Link from "next/link";

import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        {/* Landing Page Section */}
        <section className = "md:flex">
          {/* Content section */}
          <div className = "max-w-xs ml-4 mt-4">
            <h1 className = "text-2xl font-semibold md:text-4xl">Team Collab Platform</h1>
            <p className = "text-xs mt-2 md:text-sm">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="button-fill mr-4 mt-6 py-2 w-24">
              <Link href="/">Learn More</Link>
            </div>
          </div>

          {/* Image Section */}
          <div className = "bg-red-200 w-96 h-96 mt-4"></div>
        </section>
      </main>

      <Footer />
    </>
  );
}
