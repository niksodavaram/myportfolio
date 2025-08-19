import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import type { StoryObj } from "@storybook/react";
import AnimatedBackground from "../AnimatedBackground";

const meta = {
  title: "Components/AnimatedBackground",
  component: AnimatedBackground,
};
export default meta;

// Story
type Story = StoryObj<typeof AnimatedBackground>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // your assertions here
    expect(canvas.getAllByTestId("circle")).toHaveLength(3);
    expect(canvas.getAllByTestId("tiny")).toHaveLength(11);
  },
};