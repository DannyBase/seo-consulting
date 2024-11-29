import Head from "next/head";

const SEO = ({ pageTitle }) => (
    <>
        <Head>
            <title>
            SEOQ || {pageTitle && pageTitle }
            </title>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="SEOQ - SEO & Digital Marketing Agency" />
            <meta name="robots" content="noindex, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
    </>
);

export default SEO;