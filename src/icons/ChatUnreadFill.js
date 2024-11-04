import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChatUnreadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 7a3 3 0 100-6 3 3 0 000 6zm0 2c.343 0 .677-.034 1-.1V18a1 1 0 01-1 1H6.455L2 22.5V4a1 1 0 011-1h13.1A5 5 0 0021 9z" />
    </Svg>
  );
}

export default SvgChatUnreadFill;
