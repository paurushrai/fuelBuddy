import type { Meta, StoryObj } from '@storybook/vue3';
import Profile from './Profile.vue';

const meta: Meta<typeof Profile> = {
  component: Profile,
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Primary: Story = {
  render: (args) => ({
    components: { Profile },
    setup() {
      return { args };
    },
    template: '<Profile v-bind="args" />',
  }),
  args: {
  },
};