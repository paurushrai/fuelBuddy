import type { Preview } from "@storybook/vue3";

// import type { withThemeByClassName } from '@storybook/addon-styling';
import { createPinia } from 'pinia';
import { setup } from '@storybook/vue3';

import '../src/styles/main.css';

setup((app) => {
  app.use(createPinia());
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // decorators: [
  //   // Adds theme switching support.
  //   // NOTE: requires setting "darkMode" to "class" in your tailwind config
  //   withThemeByClassName({
  //     themes: {
  //       light: 'light',
  //       dark: 'dark',
  //     },
  //     defaultTheme: 'light',
  //   }),
  // ],
};

export default preview;
