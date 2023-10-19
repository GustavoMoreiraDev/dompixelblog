import Head from 'next/head';
import Header from '@/components/header';
import Hposts from '@/components/home/hPosts';

export default function Home() {
  return (
    <>
      <Head>
        <title>DOMPIXEL | Blog</title>
        <meta name="description" content="Dom Pixel Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Hposts />
    </>
  )
}
