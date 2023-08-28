import type { Meta, StoryObj } from '@storybook/vue3';
import Dashboard from './Dashboard.vue';

const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Primary: Story = {
  render: (args) => ({
    components: { Dashboard },
    setup() {
      return { args };
    },
    template: '<Dashboard v-bind="args" />',
  }),
  args: {

  },
};