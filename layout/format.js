import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Nav from "@/src/components/Nav";
import Head from "next/head";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Neodain's Blog</title>
      </Head>
      <Nav />
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
