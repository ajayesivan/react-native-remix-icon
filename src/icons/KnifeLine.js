import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKnifeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.343 1.408L22.374 19.44a1.5 1.5 0 11-2.121 2.122l-4.596-4.596L12.12 20.5l-7.778-7.778A8 8 0 014.17 1.587l.173-.179zm.241 3.07l-.051.11a6.005 6.005 0 001.048 6.535l.176.185 6.364 6.364 2.828-2.829L4.584 4.478z" />
    </Svg>
  );
}

export default SvgKnifeLine;
