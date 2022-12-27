import type { AxiosInstance, AxiosResponse } from 'axios';
import { axiosInstance } from './customAxios';

interface GitHubIssueService {
  getIssuesByPage(page: number): Promise<AxiosResponse>;
  getIssues(): Promise<AxiosResponse>;
}

class GitHubIssueServiceImp<I extends AxiosInstance>
  implements GitHubIssueService
{
  private httpClient: I;
  constructor(httpClient: I) {
    this.httpClient = httpClient;
  }

  get client() {
    return this.httpClient;
  }

  async getIssuesByPage(page: number) {
    const result = await this.httpClient.get(
      `/repos/facebook/create-react-app/issues?state=open&sort=comments&direction=desc&per_page=20&page=${page}`
    );

    return result.data;
  }

  async getIssues() {
    const result = await this.httpClient.get(
      `/repos/facebook/create-react-app/issues`
    );
    return result.data;
  }
}

export const gitHubIssueService = new GitHubIssueServiceImp(axiosInstance);
