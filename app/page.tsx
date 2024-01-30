"use client"

import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";

import SuspenseWrapper from "./hoc/suspense";
import Dashboard from "./news/page";

export default function Home() {

  const queryClient = new QueryClient();

  return (
    <>
    <Head>
      <title>View Meme</title>
    </Head>
    <SuspenseWrapper>
    <QueryClientProvider client={queryClient}>
    <Dashboard />
    </QueryClientProvider>
    </SuspenseWrapper>
    </>
  );
}
