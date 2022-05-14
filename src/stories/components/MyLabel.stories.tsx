import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel_01';

// // Our story
export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = args => <MyLabel {...args} />; // Enabling Args in Storybook

// // Crear las pages/cuentos de la Story  <- .bind({})  romper ref   this
export const Basic = Template.bind({});

// Args with Default values in Storybook
Basic.args = {
  allCaps: true, // true - capitalize all word
  size: 'h1',
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  allCaps: true,
  size: 'normal',
};

export const Secondary = Template.bind({});
Secondary.args = {
  allCaps: false,
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  allCaps: false,
  size: 'normal',
  color: 'tertiary',
};

export const CustomFormColor = Template.bind({});
CustomFormColor.args = {
  allCaps: false,
  size: 'h1',
  fontColor: '#5517ac',
};

export const CustomBgColor = Template.bind({});
CustomBgColor.args = {
  allCaps: false,
  fontColor: '#fff',
  size: 'h1',
};
