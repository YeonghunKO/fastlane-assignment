import { ComponentStory, ComponentMeta } from '@storybook/react';
import Issue from './Issue';

export default {
  title: 'IssueList/Atoms/Issue',
  component: Issue,
} as ComponentMeta<typeof Issue>;

const Template: ComponentStory<typeof Issue> = args => <Issue {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  number: 7777,
  title: '하하호호',
  html_url: 'https://www.naver.com',
  comments: 777,
  updated_at: '1992-09-23T13:02:33Z',
};
