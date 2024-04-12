"use client"
import style from './page.module.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ContainerProducts } from "../components/containerProducts";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className={style.main}>
      <QueryClientProvider client={queryClient}>
        <ContainerProducts/>
      </QueryClientProvider>
    </main>
  )
}
