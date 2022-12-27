import type { IssueType } from 'type/issue';

type Page = {
  issues?: IssueType[];
  nextId?: number;
};

interface IssuesContainerType {
  data?: Page[];
}

export type { IssuesContainerType };
