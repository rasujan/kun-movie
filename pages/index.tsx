import Head from "next/head";
import TrendingMovies from "@/components/TrendingMovies";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kun Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=""></main>
      <TrendingMovies />
      <footer className=""></footer>
    </div>
  );
}
