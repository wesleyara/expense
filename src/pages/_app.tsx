import "../styles/index.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/UserContext";
import { DataContextProvider } from "../context/DataContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Expense</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <UserContextProvider>
        <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
      </UserContextProvider>
    </>
  );
}

export default MyApp;
