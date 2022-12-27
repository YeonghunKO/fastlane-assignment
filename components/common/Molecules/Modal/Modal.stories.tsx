import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Molecules/ErrorModal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  errorMessage: '에러메세지 입니다',
};
