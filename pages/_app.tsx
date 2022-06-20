import type { AppProps } from "next/app";
import "../styles/globals.css";
import AuthGuard from "./components/Auth/AuthGuard";
import AuthProvider from "./components/Auth/AuthProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {Component.protected ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
