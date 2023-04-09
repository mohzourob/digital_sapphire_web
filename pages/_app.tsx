import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import { appWithTranslation } from "next-i18next";
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
