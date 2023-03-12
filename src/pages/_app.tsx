import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Provider} from "react-redux";
import Store from "@/store";
import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";
import {Router} from "next/router";
import NProgress from "nprogress"

export default function App({ Component, pageProps }: AppProps) {
  const customTheme = createTheme({
    typography: {
      fontFamily: "Montserrat",
      fontWeightBold: 700,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
    },
  });
  React.useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();
    //add the event handler on mount
    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  const client = new QueryClient();
  return  (
      <QueryClientProvider client={client} >
      <Provider store={Store}>
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />

    </ThemeProvider>
      </Provider>
      </QueryClientProvider>
  )
}
