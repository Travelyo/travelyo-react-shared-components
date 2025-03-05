import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Search",
  },
}

export const WithLabel: Story = {
  args: {
    placeholder: "Search",
    label: "Search",
  },
}

export const WithHelpLabel: Story = {
  args: {
    placeholder: "Search",
    label: "Search",
    helpLabel: "Help",
  },
}

export const WithIcons: Story = {
  args: {
    placeholder: "Pick date",
    label: "Date",
    startIcon: <i className="ri-calendar-line" />,
    endIcon: <i className="ri-calendar-line" />,
  },
}

export const WithError: Story = {
  args: {
    placeholder: "Pick date",
    label: "Date",
    startIcon: <i className="ri-calendar-line" />,
    endIcon: <i className="ri-calendar-line" />,
    error: "Invalid date",
  },
}
