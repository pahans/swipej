import Head from 'next/head';
import NavBar from './components/Nav/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>swipejobs | Gig work with W-2 benefits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <main>
          <NavBar userName="User name" />
          <div className="xl:container xl:mx-auto px-4">
          <h1 className="text-6xl font-bold">Hello</h1>
          <p>world</p>
          </div>
        </main>
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <div className="xl:container xl:mx-auto">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
