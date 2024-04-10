import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTiktokLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 2v6.414a6.85 6.85 0 105.6 6.736v-3.736a8.603 8.603 0 003.4.686h1V6.5h-1c-1.903 0-3.4-1.537-3.4-3.5V2H11zm2 2h1.688c.394 2.22 2.08 3.996 4.312 4.41v1.618c-1.038-.152-1.975-.542-2.843-1.123L14.6 7.863v7.287a4.85 4.85 0 11-4.6-4.844v1.604a3.25 3.25 0 103 3.24V4zM8.5 15.15a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" />
    </Svg>
  );
}

export default SvgTiktokLine;
