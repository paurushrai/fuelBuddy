import type { Meta, StoryObj } from '@storybook/vue3';
import Register from './Register.vue';

const meta: Meta<typeof Register> = {
  component: Register,
};

export default meta;
type Story = StoryObj<typeof Register>;

export const Primary: Story = {
  render: (args) => ({
    components: { Register },
    setup() {
      return { args };
    },
    template: '<Register v-bind="args" />',
  }),
  args: {
  },
};