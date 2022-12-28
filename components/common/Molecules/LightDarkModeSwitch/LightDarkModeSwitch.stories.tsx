import { ComponentStory, ComponentMeta } from '@storybook/react';
import LightDarkModeSwitch from './LightDarkModeSwitch';

export default {
  title: 'Common/Molecules/LightDarkModeSwitch',
  component: LightDarkModeSwitch,
} as ComponentMeta<typeof LightDarkModeSwitch>;

const Template: ComponentStory<typeof LightDarkModeSwitch> = args => (
  <LightDarkModeSwitch />
);

export const Basic = Template.bind({});
