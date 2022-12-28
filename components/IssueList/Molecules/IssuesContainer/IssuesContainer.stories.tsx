// @ts-nocheck
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IssuesContainer from './IssuesContainer';

export default {
  title: 'IssueList/Molecules/IssuesContainer',
  component: IssuesContainer,
} as ComponentMeta<typeof IssuesContainer>;

const Template: ComponentStory<typeof IssuesContainer> = args => (
  <IssuesContainer {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  data: [
    {
      issues: [
        {
          number: 7777,
          title: '하하호호',
          html_url: 'https://www.naver.com',
          comments: 777,
          updated_at: '1992-09-23T13:02:33Z',
        },
        {
          number: 7777,
          title: '하하호호',
          html_url: 'https://www.naver.com',
          comments: 777,
          updated_at: '1992-09-23T13:02:33Z',
        },
        {
          number: 7777,
          title: '하하호호',
          html_url: 'https://www.naver.com',
          comments: 777,
          updated_at: '1992-09-23T13:02:33Z',
        },
        {
          number: 7777,
          title: '하하호호',
          html_url: 'https://www.naver.com',
          comments: 777,
          updated_at: '1992-09-23T13:02:33Z',
        },
        {
          number: 7777,
          title: '하하호호',
          html_url: 'https://www.naver.com',
          comments: 777,
          updated_at: '1992-09-23T13:02:33Z',
        },
        {
          number: 7777,
          title: '하하호호',
          html_url: 'https://www.naver.com',
          comments: 777,
          updated_at: '1992-09-23T13:02:33Z',
        },
      ],
      nextId: 2,
    },
  ],
};
