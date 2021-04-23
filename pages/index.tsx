import Head from "next/head";
import TrendingMovieList from "@/components/TrendingMovieList";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Kun Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=""></main>
      <TrendingMovieList />
      <footer className=""></footer>
    </div>
  );
}
