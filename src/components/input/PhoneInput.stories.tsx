import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PhoneInput from "./PhoneInputV2";

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: "Components/Phone Input",
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;



export const WithPhoneInput: Story = {
  args: {
    error: "test",
    initialValue: "1234567890",
    initialCountry: "de",
    onChange: (value: string, name: string) => console.log(value, name),
  },
}

