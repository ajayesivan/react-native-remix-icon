import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10 15.17l9.192-9.191 1.414 1.414L10 17.999l-6.364-6.364 1.414-1.414 4.95 4.95z" />
    </Svg>
  );
}

export default SvgCheckFill;
