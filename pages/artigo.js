import Head from "next/head";
import Pub from "@/components/blog/pub";

export default function Artigo () {
    return (
        <>
            <Head>
                <title>DOMPIXEL | Blog</title>
                <meta name="description" content="Dom Pixel Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Pub />
        </>
    )
};