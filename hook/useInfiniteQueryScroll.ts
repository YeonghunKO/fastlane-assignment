import { useInfiniteQuery } from '@tanstack/react-query';
import type { IssueType } from 'type/issue';
import type { AxiosError } from 'axios';
import { gitHubIssueService } from 'NetWork/gitHubIssueService';

const useInfiniteQueryScroll = () => {
  return useInfiniteQuery<
    { issues: IssueType[]; nextId: number | undefined },
    AxiosError<any>
  >(
    ['issues'],
    async ({ pageParam = 1 }) => {
      const MAX_PAGE = 6;

      const issues = await gitHubIssueService.getIssuesByPage(pageParam);

      return {
        issues,
        nextId:
          issues.length > 0 && pageParam <= MAX_PAGE
            ? pageParam + 1
            : undefined,
      };
    },
    {
      getNextPageParam: (lastPage, _pages) => lastPage.nextId,
    }
  );
};

export default useInfiniteQueryScroll;
