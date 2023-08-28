import type { Meta, StoryObj } from '@storybook/vue3';
import Hero from './Hero.vue';

const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: '<Hero v-bind="args" />',
  }),
  args: {
    headline: 'Doorstep Fuel Delivery Service',
    subHeading: "India's Largest Doorstep Diesel Delivery Service",
    buttonText: 'Download App'
  },
};