import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";

import Proposal from "./Proposal";
import { ProposalProvider } from "./proposalContext";

const meta: Meta<typeof Proposal> = {
  component: Proposal,
  title: "Components/Proposals",
  decorators: [
    (Story) => (
      <ProposalProvider>
        <Story />
      </ProposalProvider>
    ),
  ]
};

export default meta;
type Story = StoryObj<typeof Proposal>;

export const Primary: Story = {
  args: {
    trigger: <button>click</button>,
  }
}
