import React from 'react';
import Head from 'next/head';

type Props = {
  description?: string;
  title?: string;
  siteTitle?: string;
};

const SEO: React.FC<Props> = ({
  description = '',
  title = '',
  siteTitle = '',
}) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
