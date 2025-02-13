import type { Preview } from "@storybook/react";
import 'remixicon/fonts/remixicon.css';
import '../src/styles/index.scss';
import "../src/tailwind-output.css";

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
};

export default preview;
