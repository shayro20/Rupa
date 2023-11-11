import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import { dot } from "node:test/reporters";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
