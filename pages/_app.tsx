import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "./components/Navbar";
import dotenv from "dotenv";
dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
