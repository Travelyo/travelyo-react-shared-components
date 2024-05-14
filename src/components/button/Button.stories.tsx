import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  name: "Button playground",
  args: {
    label: "Let's start",
    size: "medium",
  },
}
