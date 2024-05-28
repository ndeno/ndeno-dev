import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentType } from "react";

import { Heading } from "../components/Heading/Heading";

const component = Heading as unknown as Meta<typeof Heading>["component"];

const meta: Meta<typeof Heading> = {
  title: "Example/Heading",
  component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et metus vitae risus convallis dictum. Aliquam erat volutpat",
    onClick: () => alert("bar"),
  },
};
export const Secondary: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et metus vitae risus convallis dictum. Aliquam erat volutpat",
    onClick: () => alert("bar"),
    variant: "secondary",
  },
};
