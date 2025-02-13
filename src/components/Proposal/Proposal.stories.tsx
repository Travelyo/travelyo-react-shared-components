import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

import Proposal from "./Proposal";

const meta: Meta<typeof Proposal> = {
  component: Proposal,
  title: "Components/Proposals",
};

export default meta;
type Story = StoryObj<typeof Proposal>;

export const Primary: Story = {
  args: {
    trigger: <button>Add to proposal</button>,
  }
}
