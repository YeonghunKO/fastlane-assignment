import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Common/Molecules/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  message: '좋은 하루 입니다😊',
  onButton: () => alert('1+1=?'),
};
