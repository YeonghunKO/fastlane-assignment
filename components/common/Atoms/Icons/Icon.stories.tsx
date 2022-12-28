import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from './Icon';
import Icons from './index';

export default {
  title: 'Common/Atoms/Icons',
  component: Icon,
  argTypes: {
    icon: {
      options: [...Object.keys(Icons)],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  icon: 'Sun',
};
