import React from "react";
import { Text } from "react-native";
import * as Icons from "./icons";

type Props = {
  name: string;
  size?: number;
  color?: string;
  type?: "fill" | "line";
};

const RemixIcon = ({
  name,
  size = 24,
  color = "#000",
  type = "fill",
}: Props) => {
  const Icon = Icons[name];

  return <Icon size={size} color={color} />;
};

export default RemixIcon;
