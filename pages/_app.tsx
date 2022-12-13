import { Provider } from "react-redux";
import dynamic from "next/dynamic";
import type { AppProps, NextWebVitalsMetric } from "next/app";

import { store } from "../store/index";

const ProgressBar = dynamic(() => import("../components/ProgressBar"), {
  ssr: false,
});

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric);
}

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProgressBar />;
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
