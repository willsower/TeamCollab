import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
  ];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Header sections= { sections } title = "Blog" />
      </main>

      <footer></footer>
    </div>
  );
}
