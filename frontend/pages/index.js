import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Nav from "../components/nav";
import Footer from "../components/footer";
import { Feature, BoxFeature } from "../components/helpers/home";

import styles from "../styles/Home.module.css";

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
        <section className="bg-secondary">
          <div className="sm:flex sm:py-12 sm:max-w-2xl sm:m-auto md:max-w-4xl">
            {/* Content section */}
            <div className="max-w-xs md:max-w-md ml-4 pt-4 md:pl-8">
              <div className="text-2xl font-semibold md:text-4xl">
                Create your
                <div className={`${styles.changing_keywords}`}>
                  <p className="text-primary">Game Developer</p>
                  {/* <strong>
                  <p className={`${styles.hidden} text-primary`}>Game Development</p>
                  <br />
                  <p className={`${styles.hidden} text-primary`}>Mobile Application</p>
                  <br />
                  <p className={`${styles.hidden} text-primary`}>Web Applications</p>
                  <br />
                  <p className={`${styles.hidden} text-primary`}>Hackathons</p>
                </strong> */}
                  <p>Team</p>
                </div>
              </div>

              <p className="text-xl mt-2 font-light">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="button-fill mr-4 mt-6 py-2 w-24">
                <Link href="/">Learn More</Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-60 h-60 ml-4">
              <Image
                src="/img/temporary.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>

        {/* Setup Features */}
        <section className="py-12 sm:flex sm:m-auto sm:max-w-xl md:max-w-3xl">
          <Feature
            name="Quick &amp; Easy Setup"
            desc="Easily setup your account in little as 5 minutes, starting findng a team now"
            img="/img/temporary.png"
          />
          <Feature
            name="Create a project"
            desc="List your project idea to find people who are interested"
            img="/img/temporary.png"
          />
          <Feature
            name="Find a project"
            desc="Choose a project to work on and contact the team lead"
            img="/img/temporary.png"
          />
        </section>

        {/* List Sponsors */}
        {/* <section className="py-20 bg-secondary"></section> */}

        {/* List Features */}
        {/* <section className="py-12 md:flex bg-secondary relative"> */}
          {/* content */}
          {/* <div className="px-12 m-auto md:max-w-xl">
            <h1 className="text-xl font-semibold">
              Make your idea into reality by finding the right team members
            </h1>
            <p className="mt-4 text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <div className="button-fill mr-4 mt-6 py-2 w-20">
              <Link href="/">Try Now</Link>
            </div>
          </div> */}

          {/* Images */}
            {/* <div className="flex absolute left-4 top-96"> */}
              {/* Left Portion */}
              {/* <div className="mr-1 mt-12">
                <BoxFeature name="Planner" img="/img/temporary.png" />
                <BoxFeature name="Suggestions" img="/img/temporary.png" />
              </div> */}

              {/* Right Portion */}
              {/* <div className="ml-1">
                <BoxFeature name="Publisher" img="/img/temporary.png" />
                <BoxFeature name="Analytics" img="/img/temporary.png" />
              </div>
            </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
