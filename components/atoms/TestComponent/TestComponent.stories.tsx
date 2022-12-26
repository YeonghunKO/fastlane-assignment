import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestComponent from './TestComponent';

export default {
  title: 'Atoms/testComponent',
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

const Template: ComponentStory<typeof TestComponent> = args => (
  <TestComponent />
);

export const Basic = Template.bind({});
