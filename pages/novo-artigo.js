import Ncolumn from "@/components/blog/new/Ncolumn";
import Header from "@/components/header";
import Head from "next/head";
export default function NovoArtigoPage () {
    
    return (
        <>
            <Head>
                <title>DOMPIXEL | Blog</title>
                <meta name="description" content="Dom Pixel Blog" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <Ncolumn />
        </>
    );
};
