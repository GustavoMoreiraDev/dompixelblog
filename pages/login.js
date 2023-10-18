import Flogin from "@/components/forms/fLogin";
import Head from "next/head";
export default function Login() {
  return (
    <>
      <Head>
        <title>DOMPIXEL | Entrar</title>
        <meta name="description" content="Dom Pixel Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Flogin />
    </>
  );
}
