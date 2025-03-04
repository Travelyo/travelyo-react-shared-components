import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/components': path.resolve(__dirname, "../src/components"),
        '@/ui': path.resolve(__dirname, "../src/components/ui"),
        '@/lib': path.resolve(__dirname, "../src/lib"),
        '@/hooks': path.resolve(__dirname, "../src/hooks"),
        '@/services': path.resolve(__dirname, "../src/services"),
      };
    }
    return config;
  }
};
export default config;
