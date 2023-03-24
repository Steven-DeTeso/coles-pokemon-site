import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Pokémon Website</title>
      </Head>
      <header>
        <nav>
          <Link href="/"></Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
