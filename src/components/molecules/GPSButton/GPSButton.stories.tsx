import { ComponentMeta, ComponentStory } from "@storybook/react";

import GPSButton from "./index";

export default {
  title: "molecules/GPSButton",
  component: GPSButton,
} as ComponentMeta<typeof GPSButton>;

export const Primary: ComponentStory<typeof GPSButton> = ({
  selected = false,
  onClick,
}) => <GPSButton {...{ selected, onClick }} />;
