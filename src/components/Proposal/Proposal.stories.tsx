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
    offerData: {
      date: "2022-01-01",
      offerId: "1",
      searchCapacity: '2-0',
      searchContext: 'City trips',
      searchDuration: '7',
    }
  }
}
