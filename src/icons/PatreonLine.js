import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPatreonLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.001 17a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-2a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm-13-13h5v20h-5V2zm2 2v16h1V4h-1z" />
    </Svg>
  );
}

export default SvgPatreonLine;
