import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../app/store";
import { appWithTranslation } from "next-i18next";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL || ""}
      appId={process.env.NEXT_PUBLIC_APPID || ""}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MoralisProvider>
  );
}

export default appWithTranslation(MyApp);
