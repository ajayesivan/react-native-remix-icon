import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPatreonFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.001 17a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm-13-15h4v20h-4V2z" />
    </Svg>
  );
}

export default SvgPatreonFill;
