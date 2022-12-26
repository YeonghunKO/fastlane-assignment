import { gitHubIssueService } from 'NetWork/GitHubIssueService';
import React, { useEffect } from 'react';

const IssueList = () => {
  useEffect(() => {
    async function getListByPage(page: number) {
      const issues = await gitHubIssueService.getIssuesByPage(page);
      console.log(issues);
    }

    getListByPage(2);
  }, []);
  return <div>issueList</div>;
};

export default IssueList;
