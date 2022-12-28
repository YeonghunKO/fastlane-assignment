import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'IssueList/Atoms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  owner: '포켓몬스터',
  repo: '파이리',
};
