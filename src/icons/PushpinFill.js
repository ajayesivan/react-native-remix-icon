import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPushpinFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22.313 10.175l-1.415 1.414-.707-.707-4.242 4.243-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707 4.242-4.243-.707-.707 1.414-1.414 8.486 8.485z" />
    </Svg>
  );
}

export default SvgPushpinFill;
