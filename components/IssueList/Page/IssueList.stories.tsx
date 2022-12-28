import LightDarkModeSwitch from '@components/common/Molecules/LightDarkModeSwitch';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Head from 'next/head';
import IssueList from './IssueList';

import './index.css';

const IssueListWithDarkSwitch = () => {
  return (
    <>
      <LightDarkModeSwitch />
      <IssueList />
    </>
  );
};

export default {
  title: 'IssueList/Page/IssueList',
  component: IssueListWithDarkSwitch,
} as ComponentMeta<typeof IssueListWithDarkSwitch>;

const Template: ComponentStory<typeof IssueListWithDarkSwitch> = args => (
  <IssueListWithDarkSwitch />
);

export const Basic = Template.bind({});
