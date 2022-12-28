import { ComponentStory, ComponentMeta } from '@storybook/react';
import LightDarkModeSwitch from './LightDarkModeSwitch';

export default {
  title: 'Atoms/Button',
  component: LightDarkModeSwitch,
} as ComponentMeta<typeof LightDarkModeSwitch>;

const Template: ComponentStory<typeof LightDarkModeSwitch> = args => (
  <LightDarkModeSwitch {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
  children: '버튼',
  width: 'auto',
};
