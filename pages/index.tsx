import IssueList from '@components/IssueList/Page';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { queryKeys } from 'constant/queryKeys';
import { gitHubIssueService } from 'NetWork/gitHubIssueService';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Github Issue List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IssueList />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  const getAccountsList = async () => {
    const result = await gitHubIssueService.getIssuesByPage(1);

    return result;
  };

  await queryClient.prefetchQuery(queryKeys.initIssues, getAccountsList);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
