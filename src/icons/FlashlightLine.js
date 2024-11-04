import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlashlightLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z" />
    </Svg>
  );
}

export default SvgFlashlightLine;
