import Head from 'next/head';

export const Title = ({ children }: { children: string }) => {
  return (
    <Head>
      <title>{`${children} - Revolancer`}</title>
    </Head>
  );
};
