import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainLayout from "../components/layouts/MainLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen />
      </MainLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
