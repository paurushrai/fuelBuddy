import type { Meta, StoryObj } from '@storybook/vue3';
import Home from './Home.vue';

const meta: Meta<typeof Home> = {
  component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Primary: Story = {
  render: (args) => ({
    components: { Home },
    setup() {
      return { args };
    },
    template: '<Home v-bind="args" />',
  }),
  args: {
  },
};