import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import type { IssueType } from 'type/issue';
import type { AxiosError } from 'axios';
import { gitHubIssueService } from 'NetWork/gitHubIssueService';
import { queryKeys } from 'constant/queryKeys';

const useInfiniteQueryScroll = () => {
  const queryClient = useQueryClient();
  return useInfiniteQuery<
    { issues: IssueType[] | undefined; nextId: number | undefined },
    AxiosError<any>
  >(
    queryKeys.issues,
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
      initialData: () => {
        const queryCacheData = queryClient.getQueryState<
          IssueType[],
          AxiosError<any>
        >(queryKeys.initIssues)?.data;
        if (queryCacheData) {
          return {
            pageParams: [undefined],
            pages: [
              {
                issues: queryCacheData,
                nextId: 1,
              },
            ],
          };
        }
      },
      getNextPageParam: (lastPage, _pages) => lastPage.nextId,
    }
  );
};

export default useInfiniteQueryScroll;
