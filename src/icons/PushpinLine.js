import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPushpinLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.827 1.69l8.486 8.485-1.415 1.414-.707-.707-4.242 4.243-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707 4.242-4.243-.707-.707 1.414-1.414zm.707 3.536l-4.67 4.67-2.822.565 6.5 6.5.564-2.822 4.671-4.67-4.243-4.243z" />
    </Svg>
  );
}

export default SvgPushpinLine;
