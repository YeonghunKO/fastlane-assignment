import Theme from '@components/particles/Theme';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Common/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: '버튼',
  width: 'auto',
  backgroundColor: Theme.boxBackground,
  textColor: Theme.title,
};
