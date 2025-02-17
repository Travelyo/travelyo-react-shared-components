import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PhoneInput from "./PhoneInput";

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: "Components/Phone Input",
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;



export const WithPhoneInput: Story = {
  args: {},
}

