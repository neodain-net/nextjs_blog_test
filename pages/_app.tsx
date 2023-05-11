import Nav from "@/src/components/Nav";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

import { QueryClient, QueryClientProvider, Hydrate } from "react-query";

// create a query client
const queryclient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryclient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div>
          <Nav />
          <div>
            <Component {...pageProps} />
          </div>
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
