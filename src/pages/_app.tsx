import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { Shantell_Sans } from "next/font/google";

const queryClient = new QueryClient();
const shantelSans = Shantell_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
