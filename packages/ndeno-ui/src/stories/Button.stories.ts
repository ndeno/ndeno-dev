import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentType } from "react";

import { Button } from "../components/Button/Button";

const component = Button as unknown as Meta<typeof Button>["component"];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "foo",
    onClick: () => alert("bar"),
    disabled: true,
  },
};
